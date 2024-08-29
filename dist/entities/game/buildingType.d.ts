import { IBuildingType } from "@warlords/common";
import { ResourceType } from "./resourceType";
import { Size } from "./geometry/size";
import { UnitType } from "./unitType";
import { Cost } from "./cost";
import { World } from "./world";
import { BuildingConfig } from "./configure/buildingConfig";
export declare class BuildingType implements IBuildingType {
    id: string;
    name: string;
    hasMaxLevel: boolean;
    maxLevel: number;
    multiplierUnitCost: number;
    multiplierUnitTime: number;
    storeAmount: number;
    multiplierStorage: number;
    hasMarket: boolean;
    initialMaxOffers: number;
    multiplierMaxOffers: number;
    receiveDamage: boolean;
    txRevive: number;
    damage: number;
    health: number;
    agility: number;
    range: number;
    multiplierDamage: number;
    multiplierHealth: number;
    multiplierAgility: number;
    multiplierRange: number;
    multiplierResources: number;
    multiplierCost: number;
    multiplier: number;
    initial: number;
    hasUnitGenerate: boolean;
    hasStore: boolean;
    world: World;
    size: Size;
    buildingConfig: BuildingConfig;
    unitsGenerate: UnitType[];
    resources: ResourceType[];
    cost: Cost[];
    constructor(values?: any);
}
