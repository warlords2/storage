import { Market } from "./market";
import { Npc } from "./npc";
import { Player } from "./player";
import { Province } from "./province";
export interface World {
    name: string;
    market: Market;
    provinces: Province[];
    npcs: Npc[];
    players: Player[];
}
