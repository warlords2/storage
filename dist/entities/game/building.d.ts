import { IBuilding } from "@warlords/common";
import { City } from "./city";
import { Position } from "./geometry/position";
import { BuildingType } from "./buildingType";
export declare class Building implements IBuilding {
    id: string;
    level: number;
    buildingType: BuildingType;
    city: City;
    position: Position;
    createdAt: Date;
    updatedAt: Date;
    constructor(values?: any);
}
