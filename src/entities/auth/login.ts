import { ILogin } from "@warlords/common";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm"
import { User } from "../user"
import { TypeLogin } from "./type_login";

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
        enum: TypeLogin,
        default: TypeLogin.MAIL
    })
    type: TypeLogin;

    @ManyToOne(type => User, (user)=> user.logins)
    user: User;

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}