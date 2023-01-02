import { BaseEntity } from '../../../shared/base.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Role } from '../enums/role.enum';
import {
  PrivateFileEntity,
  PublicFileEntity,
} from '../../files/entities/file.entity';

@Entity('User')
export class UserEntity extends BaseEntity {
  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ default: '' })
  username: string;

  @Column({ default: 0 })
  balance: number;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.User,
  })
  role: Role;

  @JoinColumn()
  @OneToOne(() => PublicFileEntity, {
    eager: true,
    nullable: true,
  })
  public avatar?: PublicFileEntity;

  @OneToMany(() => PrivateFileEntity, (file) => file.owner)
  files: PrivateFileEntity[];

  @Column({
    nullable: true,
  })
  public stripeCustomerId: string;
}
