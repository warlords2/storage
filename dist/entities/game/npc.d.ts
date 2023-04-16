import { INpc, NpcType } from '@warlords/common';
import { City } from './city';
import { World } from './world';
export declare class Npc implements INpc {
    id: number;
    name: String;
    type: NpcType;
    world: World;
    cities: City;
    constructor(values?: any);
}
