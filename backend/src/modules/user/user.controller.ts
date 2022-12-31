import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UploadedFile,
  HttpCode,
  UseInterceptors,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from './decorators/user.decorator';
import { Auth } from '../auth/decorators/auth.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express, Response } from 'express';

@ApiTags('user')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/profile')
  @Auth()
  getMe(@CurrentUser('id') userId: string) {
    return this.userService.getUserById(+userId);
  }

  @Get('/files')
  @Auth()
  getAllPrivateFiles(@CurrentUser('id') userId: string) {
    return this.userService.getAllPrivateFiles(Number(userId));
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(Number(id), updateUserDto);
  }

  @Post('/avatar')
  @HttpCode(201)
  @Auth()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  addAvatar(
    @CurrentUser('id') userId: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.userService.addAvatar(
      Number(userId),
      file.buffer,
      file.originalname,
    );
  }

  @Delete('/avatar')
  @Auth()
  deleteAvatar(@CurrentUser('id') userId: string) {
    return this.userService.deleteAvatar(Number(userId));
  }

  @Post('files')
  @HttpCode(201)
  @Auth()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  async addPrivateFile(
    @CurrentUser('id') userId: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.userService.addPrivateFile(
      Number(userId),
      file.buffer,
      file.originalname,
      file.mimetype,
    );
  }

  @Get('files/:id')
  @Auth()
  async getPrivateFile(
    @CurrentUser('id') userId: string,
    @Param('id') id: string,
    @Res() res: Response,
  ) {
    const file = await this.userService.getPrivateFile(
      Number(userId),
      Number(id),
    );
    file.stream.pipe(res);
  }
}
