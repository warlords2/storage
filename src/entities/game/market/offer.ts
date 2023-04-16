import { IOffer } from '@warlords/common';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Market } from '../market';

@Entity()
export class Offer implements IOffer{

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