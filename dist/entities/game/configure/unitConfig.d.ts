import { IUnitConfig } from "@warlords/common";
import { UnitType } from "../unitType";
import { ValidationError } from "class-validator";
import { WorldConfig } from "./worldConfig";
export declare class UnitConfig implements IUnitConfig {
    id: string;
    name: String;
    healthInExternalProvincePercentage: number;
    damageInExternalProvincePercentage: number;
    txReviveInExternalProvincePercentage: number;
    agilityInExternalProvincePercentage: number;
    rangeInExternalProvincePercentage: number;
    speedInExternalProvincePercentage: number;
    unitsType: UnitType[];
    worldConfig: WorldConfig;
    createdAt: Date;
    updatedAt: Date;
    examples: UnitConfig[];
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
