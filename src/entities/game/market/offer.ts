import { IOffer } from '@warlords/common';
import { CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Market } from '../market';

@Entity()
export class Offer implements IOffer{

    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @ManyToOne(()=> Market, (market)=> market.offers)
    market: Market;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
    
}