import { IResource } from "@warlords/common";
import { City } from "./city";
import { ResourceType } from "./resourceType";
export declare class Resource implements IResource {
    id: string;
    updateAmountAt: Date;
    amount: number;
    resourceType: ResourceType;
    city: City;
    createdAt: Date;
    updatedAt: Date;
    constructor(values?: any);
}
