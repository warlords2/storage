import { Offer } from "./market/offer";
import { Sale } from "./market/sale";
export interface Market {
    offers: Offer[];
    sales: Sale[];
}
