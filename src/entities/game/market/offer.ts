import { Offer as IOffer } from '@warlords/common';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Market } from '../market';

@Entity()
export class Offer implements IOffer{

    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(()=> Market, (market)=> market.offers)
    market: Market;

}