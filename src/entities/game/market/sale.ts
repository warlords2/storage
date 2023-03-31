import { Sale as ISale } from '@warlords/common';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Market } from '../market';

@Entity()
export class Sale implements ISale{
    
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=> Market, (market)=> market.offers)
    market: Market;

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}