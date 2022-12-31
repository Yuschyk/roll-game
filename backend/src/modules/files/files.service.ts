import { ConfigService } from '@nestjs/config';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PrivateFileEntity, PublicFileEntity } from './entities/file.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { S3 } from 'aws-sdk';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(PublicFileEntity)
    private fileRepository: Repository<PublicFileEntity>,
    @InjectRepository(PrivateFileEntity)
    private privateFilesRepository: Repository<PrivateFileEntity>,
    private readonly configService: ConfigService,
  ) {}

  async uploadPublicFile(dataBuffer: Buffer, filename: string) {
    const s3 = new S3();
    const uploadResult = await s3
      .upload({
        ACL: 'public-read',
        Bucket: this.configService.get('AWS_PUBLIC_BUCKET_NAME'),
        Body: dataBuffer,
        Key: `${uuid()}-${filename}`,
      })
      .promise();

    const newFile = this.fileRepository.create({
      key: uploadResult.Key,
      url: uploadResult.Location,
    });
    await this.fileRepository.save(newFile);
    return newFile;
  }

  async deleteFile(fileId: number) {
    const s3 = new S3();
    const fileToDelete = await this.fileRepository.findOne({
      where: {
        id: fileId,
      },
    });
    await s3
      .deleteObject({
        Bucket: this.configService.get('AWS_PUBLIC_BUCKET_NAME'),
        Key: fileToDelete.key,
      })
      .promise();

    await this.fileRepository.delete(fileId);
  }

  async uploadPrivateFile(
    ownerId: number,
    dataBuffer: Buffer,
    filename: string,
    fileType: string,
  ) {
    const s3 = new S3();
    const uploadResult = await s3
      .upload({
        Bucket: this.configService.get('AWS_PRIVATE_BUCKET_NAME'),
        Body: dataBuffer,
        Key: `${uuid()}-${filename}`,
        ContentType: fileType,
      })
      .promise();

    const newFile = this.privateFilesRepository.create({
      key: uploadResult.Key,
      owner: {
        id: ownerId,
      },
    });
    await this.privateFilesRepository.save(newFile);
    return newFile;
  }

  async getPrivateFile(fileId: number) {
    const s3 = new S3();

    const fileInfo = await this.privateFilesRepository.findOne({
      where: {
        id: fileId,
      },
      relations: ['owner'],
    });
    if (fileInfo) {
      const stream = await s3
        .getObject({
          Bucket: this.configService.get('AWS_PRIVATE_BUCKET_NAME'),
          Key: fileInfo.key,
        })
        .createReadStream();
      return {
        stream,
        info: fileInfo,
      };
    }
    throw new NotFoundException();
  }

  public async generatePresignedUrl(key: string) {
    const s3 = new S3();

    return s3.getSignedUrlPromise('getObject', {
      Bucket: this.configService.get('AWS_PRIVATE_BUCKET_NAME'),
      Key: key,
    });
  }
}
