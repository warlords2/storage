import { IBuildingConfig } from "@warlords/common";
import { BuildingType } from "../buildingType";
import { ValidationError } from "class-validator";
import { WorldConfig } from "./worldConfig";
export declare class BuildingConfig implements IBuildingConfig {
    id: string;
    name: String;
    buildingsType: BuildingType[];
    worldConfig: WorldConfig;
    examples: BuildingConfig[];
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
