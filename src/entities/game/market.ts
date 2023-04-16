import { IMarket } from "@warlords/common";
import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Offer } from "./market/offer";
import { Sale } from "./market/sale";

@Entity()
export class Market implements IMarket{

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Offer, (offer) => offer.market )
    offers: Offer[];

    @OneToMany(() => Sale, (sale) => sale.market )
    sales: Sale[];

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}