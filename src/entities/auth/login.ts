import { ILogin } from "@warlords/common";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { User } from "../user"
import { LoginType } from "./loginType";

@Entity()
export class Login implements ILogin{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    identifier: string;

    @Column()
    password: string;

    @Column({
        nullable: true
    })
    nonce: string;

    @Column({
        type: "enum",
        enum: LoginType,
        default: LoginType.MAIL
    })
    loginType: LoginType;

    @Column()
    userId: string;

    @ManyToOne(type => User, (user)=> user.logins)
    user: User;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}