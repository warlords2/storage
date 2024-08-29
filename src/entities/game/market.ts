import { IMarket } from "@warlords/common";
import { Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Offer } from "./market/offer";
import { Sale } from "./market/sale";
import { World } from "./world";

@Entity()
export class Market implements IMarket{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToMany(() => Offer, (offer) => offer.market )
    offers: Offer[];

    @OneToMany(() => Sale, (sale) => sale.market )
    sales: Sale[];

    @OneToOne(()=> World, (world)=> world.market)
    world: World;

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}