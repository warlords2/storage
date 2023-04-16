import { IWorld } from "@warlords/common";
import { Market } from "./market";
import { Npc } from "./npc";
import { Player } from "./player";
import { Province } from "./province";
export declare class World implements IWorld {
    id: number;
    name: string;
    market: Market;
    provinces: Province[];
    npcs: Npc[];
    players: Player[];
    constructor(values?: any);
}
