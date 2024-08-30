import { IMarket } from "@warlords/common";
import { Offer } from "./market/offer";
import { Sale } from "./market/sale";
import { World } from "./world";
export declare class Market implements IMarket {
    id: string;
    offers: Offer[];
    sales: Sale[];
    world: World;
    createdAt: Date;
    updatedAt: Date;
    constructor(values?: any);
}
