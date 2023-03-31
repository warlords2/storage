import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm"
import { User as IUser} from '@warlords/common/';
import { Login } from "./auth/login";
import { World } from "./game/world";
import { Player } from "./game/player";

@Entity()
export class User implements IUser{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Login, (login) => login.user )
    logins: Login[];

    @OneToMany(() => Player, (player)=> player.user)
    players: Player[];

}