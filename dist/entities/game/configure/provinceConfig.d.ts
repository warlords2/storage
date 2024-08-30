import { IProvinceConfig } from "@warlords/common";
import { Size } from "../geometry/size";
import { CityConfig } from "./cityConfig";
import { ValidationError } from "class-validator";
import { WorldConfig } from "./worldConfig";
export declare class ProvinceConfig implements IProvinceConfig {
    id: string;
    name: String;
    limitCity: number;
    totalNpcsPeerProvince: number;
    genereteProvince: boolean;
    size: Size;
    cityConfig: CityConfig;
    worldConfig: WorldConfig;
    createdAt: Date;
    updatedAt: Date;
    examples: ProvinceConfig[];
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
