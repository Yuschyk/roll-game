import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { AuthService } from '../auth/auth.service';
import { WsException } from '@nestjs/websockets';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageEntity } from './entities/message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChatService {
  constructor(
    private readonly authService: AuthService,

    @InjectRepository(MessageEntity)
    private readonly messageRepository: Repository<MessageEntity>,
  ) {}

  async getUserFromSocket(socket: Socket) {
    const authenticationToken = socket.handshake.headers.authorization;
    const user = await this.authService.getUserFromAuthenticationToken(
      authenticationToken,
    );
    if (!user) {
      throw new WsException('Invalid credentials.');
    }
    return user;
  }
}
