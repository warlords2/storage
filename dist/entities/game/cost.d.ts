import { ICost } from "@warlords/common";
import { ResourceType } from "./resourceType";
export declare class Cost implements ICost {
    id: string;
    resourceType: ResourceType;
    amount: number;
    fixed: boolean;
    constructor(values?: any);
}