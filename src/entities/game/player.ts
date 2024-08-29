import { User } from "../user";
import { Npc } from "./npc";
import { INpc, IPlayer, NpcType} from '@warlords/common';
import { World } from "./world";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Player extends Npc implements IPlayer, INpc{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({
        type: "enum",
        enum: NpcType,
        default: NpcType.Player
    })
    npcType: NpcType;

    @ManyToOne(()=> User, (user)=> user.players)
    user: User;

    @ManyToOne(()=> World, (world)=> world.players)
    world: World;

    constructor(values: any = {}) {
        super(values);        
        if (Object.entries(values).length === 0 && values.constructor === Object) {
            return;
            }
        Object.assign(this, values);
    }

}