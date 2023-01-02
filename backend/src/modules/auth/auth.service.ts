import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../user/entities/user.entity';
import { AuthDto, RegisterDto } from './dto/auth.dto';
import { compare, genSalt, hash } from 'bcryptjs';
import { UserService } from '../user/user.service';
import TokenPayload from './token-payload';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,

    private readonly configService: ConfigService,

    private readonly jwtService: JwtService,

    private readonly userService: UserService,
  ) {}

  async login(loginData: AuthDto) {
    const user = await this.validateUser(loginData);

    const userToken = await this.issueToken(user.id);
    return {
      user: this.returnUserFields(user),
      token: userToken,
    };
  }

  async register(registerData: RegisterDto) {
    const salt = await genSalt(10);

    const createdUser = await this.userService.createUser({
      ...registerData,
      password: await hash(registerData.password, salt),
    });

    return {
      user: this.returnUserFields(createdUser),
      token: await this.issueToken(createdUser.id),
    };
  }

  async validateUser(loginData: AuthDto) {
    const user = await this.userRepository.findOne({
      where: { email: loginData.email },
      select: ['id', 'email', 'password'],
    });

    if (!user) throw new NotFoundException('User not found');

    const isValidPassword = await compare(loginData.password, user.password);
    if (!isValidPassword) throw new UnauthorizedException('Bad password');

    return user;
  }

  async issueToken(userId: number) {
    const payload = {
      id: userId,
    };
    return await this.jwtService.sign(payload, { expiresIn: '30d' });
  }

  public async getUserFromAuthenticationToken(token: string) {
    const payload: TokenPayload = this.jwtService.verify(token, {
      secret: this.configService.get('JWT_SECRET'),
    });
    if (payload.userId) {
      return this.userService.getUserById(payload.userId);
    }
  }

  returnUserFields(user: UserEntity) {
    return {
      id: user.id,
      email: user.email,
    };
  }
}
