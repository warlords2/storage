import { IWorld } from "@warlords/common";
import { Market } from "./market";
import { Npc } from "./npc";
import { Player } from "./player";
import { Province } from "./province";
import { BuildingType } from "./buildingType";
import { UnitType } from "./unitType";
import { WorldConfig } from "./configure/worldConfig";
import { City } from "./city";
export declare class World implements IWorld {
    id: string;
    name: string;
    market: Market;
    provinces: Province[];
    cities: City[];
    buildingTypes: BuildingType[];
    unitTypes: UnitType[];
    npcs: Npc[];
    worldConfig: WorldConfig;
    players: Player[];
    createdAt: Date;
    updatedAt: Date;
    constructor(values?: any);
}
