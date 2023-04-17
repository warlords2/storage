import { IMarket } from "@warlords/common";
import { Offer } from "./market/offer";
import { Sale } from "./market/sale";
export declare class Market implements IMarket {
    id: string;
    offers: Offer[];
    sales: Sale[];
    constructor(values?: any);
}
