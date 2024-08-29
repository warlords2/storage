import { ICityConfig } from "@warlords/common";
import { Size } from "../geometry/size";
import { Building } from "../building";
import { Resource } from "../resource";
import { Unit } from "../unit";
import { ValidationError } from "class-validator";
import { ProvinceConfig } from "./provinceConfig";
export declare class CityConfig implements ICityConfig {
    id: string;
    initialStability: number;
    initialSize: Size;
    initialBuildings: Building[];
    initialResources: Resource[];
    initialUnits: Unit[];
    provinceConfig: ProvinceConfig;
    examples: ICityConfig[];
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
