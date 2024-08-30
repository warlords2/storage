import { IResourceConfig } from "@warlords/common";
import { ResourceType } from "../resourceType";
import { ValidationError } from "class-validator";
import { WorldConfig } from "./worldConfig";
export declare class ResourceConfig implements IResourceConfig {
    id: string;
    name: String;
    resourcesType: ResourceType[];
    worldConfig: WorldConfig;
    createdAt: Date;
    updatedAt: Date;
    examples: ResourceConfig[];
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
