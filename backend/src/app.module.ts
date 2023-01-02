import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { FilesModule } from './modules/files/files.module';
import { StripeModule } from './modules/stripe/stripe.module';
import { ChargeModule } from './modules/charge/charge.module';
import { ChatModule } from './modules/chat/chat.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UserModule,
    AuthModule,
    FilesModule,
    StripeModule,
    ChargeModule,
    ChatModule,
  ],
  controllers: [],
})
export class AppModule {}
