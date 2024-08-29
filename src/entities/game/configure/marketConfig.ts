import { IMarketConfig } from "@warlords/common";

import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { WorldConfig } from "./worldConfig";

@Entity()
export class MarketConfig implements IMarketConfig{
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: String;

    @Column()
    txPercentage: number;
    
    @Column()
    hasMaxOffersForPlayer: boolean;
    
    @Column()
    maxOffersForPlayer: number;
    
    @Column()
    hasMaxOffersForCity: boolean;
    
    @Column()
    maxMaxOffersForCity: number;
    
    @Column()
    limitedTimeOffers: boolean;
    
    @Column()
    limitTimeOffersInHours: number;
    
    @Column()
    limitedDistanceTrade: boolean;
    
    @Column()
    limitDistanceTrade: number;
    
    @Column()
    limitedProvinceSaltTrade: boolean;
    
    @Column()
    limitProvinceSaltTrade: number;

    @OneToOne(()=> WorldConfig, (worldConfig)=> worldConfig.marketConfig)
    @JoinColumn()
    worldConfig: WorldConfig;

    examples: MarketConfig[];

    isValid(): Promise<ValidationError[]>{

        let groups = undefined;

        let isValid = validate(this, { groups , validationError: { target: false }});

        return isValid;
    }

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
        return;
        }
        Object.assign(this, values);
    }
}