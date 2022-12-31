import { BaseEntity } from '../../../shared/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';

@Entity('PrivateFile')
export class PrivateFileEntity extends BaseEntity {
  @Column()
  key: string;

  @ManyToOne(() => UserEntity, (owner: UserEntity) => owner.files)
  owner: UserEntity;
}

@Entity('PublicFile')
export class PublicFileEntity extends BaseEntity {
  @Column()
  url: string;

  @Column()
  key: string;
}
