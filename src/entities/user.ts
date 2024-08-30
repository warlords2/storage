import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { IUser } from '@warlords/common/';
import { Login } from "./auth/login";
import { World } from "./game/world";
import { Player } from "./game/player";

@Entity()
export class User implements IUser{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @OneToMany(() => Login, (login) => login.user )
    logins: Login[];

    @OneToMany(() => Player, (player)=> player.user)
    players: Player[];

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