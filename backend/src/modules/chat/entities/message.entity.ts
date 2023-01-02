import { BaseEntity } from '../../../shared/base.entity';
import { Column, ManyToOne } from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';

export class MessageEntity extends BaseEntity {
  @Column()
  text: string;

  @ManyToOne(() => UserEntity)
  author: UserEntity;
}
