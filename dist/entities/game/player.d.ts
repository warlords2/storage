import { User } from "../user";
import { Npc } from "./npc";
import { IPlayer } from '@warlords/common';
import { World } from "./world";
export declare class Player extends Npc implements IPlayer {
    id: number;
    name: string;
    user: User;
    world: World;
    constructor(values?: any);
}
