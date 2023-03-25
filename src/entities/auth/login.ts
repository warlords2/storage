import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm"
import { User } from "../user"
import { TypeLogin } from "./type_login";

@Entity()
export class Login {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    nonce: string;

    @Column({
        type: "enum",
        enum: TypeLogin,
        default: TypeLogin.MAIL
    })
    type: TypeLogin;

    @ManyToOne(()=> User, (user)=> user.logins)
    user: User;

}