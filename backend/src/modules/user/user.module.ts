import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { FilesModule } from '../files/files.module';
import { StripeModule } from '../stripe/stripe.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), FilesModule, StripeModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
