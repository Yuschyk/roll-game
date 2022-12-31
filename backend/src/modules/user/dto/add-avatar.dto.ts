import { ApiProperty } from '@nestjs/swagger';

export class AddAvatarDto {
  @ApiProperty()
  file: Express.Multer.File;
}
