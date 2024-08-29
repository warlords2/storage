import { IUnitType } from "@warlords/common";
import { Cost } from "./cost";
import { World } from "./world";
import { UnitConfig } from "./configure/unitConfig";
export declare class UnitType implements IUnitType {
    id: string;
    name: string;
    damage: number;
    health: number;
    agility: number;
    speed: number;
    cargoCapacity: number;
    trainingTime: number;
    range: number;
    txRevivePercentage: number;
    trainingTimeInHours: number;
    world: World;
    unitConfig: UnitConfig;
    cost: Cost[];
    constructor(values?: any);
}
