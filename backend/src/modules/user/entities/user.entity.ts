import { BaseEntity } from "../../../shared/base.entity";
import { Column, Entity } from "typeorm";

@Entity("User")
export class UserEntity extends  BaseEntity{
  @Column({unique: true})
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ default: "" })
  name: string;

  @Column({ default: 0})
  balance: number;
}
