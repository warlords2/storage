import { BuildingType, IBuilding } from "@warlords/common";
import { City } from "./city";
import { Position } from "./geometry/position";
export declare class Building implements IBuilding {
    id: number;
    type: BuildingType;
    city: City;
    position: Position;
    constructor(values?: any);
}
