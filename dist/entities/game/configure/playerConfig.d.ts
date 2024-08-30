import { IPlayerConfig } from "@warlords/common";
import { ValidationError } from "class-validator";
import { WorldConfig } from "./worldConfig";
export declare class PlayerConfig implements IPlayerConfig {
    id: string;
    name: String;
    choiceProvince: boolean;
    choiceCityPosition: boolean;
    worldConfig: WorldConfig;
    createdAt: Date;
    updatedAt: Date;
    examples: PlayerConfig[];
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
