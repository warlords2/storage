import { Market as IMarket } from "@warlords/common";
import { Offer } from "./market/offer";
import { Sale } from "./market/sale";
export declare class Market implements IMarket {
    id: number;
    offers: Offer[];
    sales: Sale[];
}
