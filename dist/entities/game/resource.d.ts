import { ResourceType, Resource as IResource } from "@warlords/common";
import { City } from "./city";
export declare class Resource implements IResource {
    id: number;
    amount: number;
    type: ResourceType;
    city: City;
}