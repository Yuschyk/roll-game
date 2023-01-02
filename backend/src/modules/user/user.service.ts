import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { FilesService } from '../files/files.service';
import { StripeService } from '../stripe/stripe.service';
import { RegisterDto } from '../auth/dto/auth.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly filesService: FilesService,

    private readonly stripeService: StripeService,
  ) {}

  async createUser(userData: RegisterDto) {
    const alreadyCreatedUser = await this.userRepository.findOneBy({
      email: userData.email,
    });

    if (alreadyCreatedUser) {
      throw new BadRequestException('Email already registered');
    }

    const stripeCustomer = await this.stripeService.createCustomer(
      userData.username,
      userData.email,
    );

    const createdUser = await this.userRepository.create({
      email: userData.email,
      password: userData.password,
      username: userData.username,
      stripeCustomerId: stripeCustomer.id,
    });

    const user = await this.userRepository.save(createdUser);
    return user;
  }
  async getUserById(id: number) {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const currentUser = await this.userRepository.findOneBy({
      email: updateUserDto.email,
    });
    if (!currentUser) {
      throw new NotFoundException('User is not found');
    }
  }

  async addAvatar(userId: number, imageBuffer: Buffer, filename: string) {
    const avatar = await this.filesService.uploadPublicFile(
      imageBuffer,
      filename,
    );

    const user = await this.getUserById(userId);
    await this.userRepository.update(userId, {
      ...user,
      avatar,
    });
    return avatar;
  }

  async deleteAvatar(userId: number) {
    const user = await this.getUserById(userId);
    const fileId = user.avatar?.id;

    if (!fileId) {
      throw new NotFoundException('User avatar is not found');
    }

    await this.userRepository.update(userId, {
      ...user,
      avatar: null,
    });

    await this.filesService.deleteFile(user.avatar?.id);
  }

  async addPrivateFile(
    userId: number,
    imageBuffer: Buffer,
    filename: string,
    fileType: string,
  ) {
    return this.filesService.uploadPrivateFile(
      userId,
      imageBuffer,
      filename,
      fileType,
    );
  }

  async getPrivateFile(userId: number, fileId: number) {
    const file = await this.filesService.getPrivateFile(fileId);
    if (file.info.owner.id === userId) {
      return file;
    }
    throw new UnauthorizedException();
  }

  async getAllPrivateFiles(userId: number) {
    const userWithFiles = await this.userRepository.findOne({
      where: {
        id: userId,
      },
      relations: ['files'],
    });
    if (userWithFiles) {
      return Promise.all(
        userWithFiles.files.map(async (file) => {
          const url = await this.filesService.generatePresignedUrl(file.key);
          return {
            ...file,
            url,
          };
        }),
      );
    }
    throw new NotFoundException('User with this id does not exist');
  }
}
