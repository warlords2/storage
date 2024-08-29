import { IResource } from "@warlords/common";
import { City } from "./city";
import { ResourceType } from "./resourceType";
export declare class Resource implements IResource {
    id: string;
    amount: number;
    resourceType: ResourceType;
    city: City;
    constructor(values?: any);
}
