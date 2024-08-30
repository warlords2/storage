import { IResourceType } from "@warlords/common";
import { ResourceConfig } from "./configure/resourceConfig";
export declare class ResourceType implements IResourceType {
    id: string;
    name: String;
    hasMaxLevel: boolean;
    maxLevel: number;
    multiplier: number;
    initial: number;
    noMarket: boolean;
    fixed: boolean;
    resourceConfig: ResourceConfig;
    createdAt: Date;
    updatedAt: Date;
    constructor(values?: any);
}
