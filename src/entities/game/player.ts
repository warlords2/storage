import { User } from "../user";
import { Npc } from "./npc";
import { Player as IPlayer } from '@warlords/common';
import { World } from "./world";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Player extends Npc implements IPlayer{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(()=> User, (user)=> user.players)
    user: User;

    @ManyToOne(()=> World, (world)=> world.players)
    world: World;

}
