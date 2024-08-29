import { IUnit } from "@warlords/common";
import { UnitType } from "./unitType";
import { City } from "./city";
export declare class Unit implements IUnit {
    id: string;
    unitType: UnitType;
    ammount: number;
    city: City;
    constructor(values?: any);
}
