import { User } from "../user";
import { Npc } from "./npc";
import { INpc, IPlayer, NpcType } from '@warlords/common';
import { World } from "./world";
export declare class Player extends Npc implements IPlayer, INpc {
    id: string;
    name: string;
    npcType: NpcType;
    user: User;
    world: World;
    constructor(values?: any);
}
