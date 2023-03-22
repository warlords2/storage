import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm"
import { User as IUser} from '@warlords/common/';
import { Login } from "./auth/login";

@Entity()
export class User extends BaseEntity implements IUser{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Login, (login) => login.user )
    logins: Login[];

}