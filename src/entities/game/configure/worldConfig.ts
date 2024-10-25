import { IWorldConfig } from "@warlords/common";

import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";

import { BuildingConfig } from "./buildingConfig";
import { MarketConfig } from "./marketConfig";
import { NPCConfig } from "./npcConfig";
import { PlayerConfig } from "./playerConfig";
import { ProvinceConfig } from "./provinceConfig";
import { ResourceConfig } from "./resourceConfig";
import { UnitConfig } from "./unitConfig";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { World } from "../world";

@Entity()
export class WorldConfig implements IWorldConfig{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: String;
    
    @Column()
    hasLimitUser: boolean;
    
    @Column()
    limitUser: number;
    
    @Column()
    hasMaxTimeInHours: boolean;
    
    @Column()
    maxTimeInHours: number;

    @Column()
    hasCityForVitory: boolean;
    
    @Column()
    cityForVitory: number;
    
    @OneToOne(() => MarketConfig, (marketConfig)=> marketConfig.worldConfig)
    @JoinColumn()
    marketConfig: MarketConfig;

    @OneToOne(() => ResourceConfig, (resourceConfig)=> resourceConfig.worldConfig)
    @JoinColumn()
    resourceConfig: ResourceConfig;

    @OneToOne(() => UnitConfig, (unitConfig)=> unitConfig.worldConfig)
    @JoinColumn()
    unitConfig: UnitConfig;

    @OneToOne(() => BuildingConfig, (buildingConfig)=> buildingConfig.worldConfig)
    @JoinColumn()
    buildingConfig: BuildingConfig;
    
    @OneToOne(() => ProvinceConfig, (provinceConfig)=> provinceConfig.worldConfig)
    @JoinColumn()
    provinceConfig: ProvinceConfig;
    
    @OneToOne(() => NPCConfig, (npcConfig)=> npcConfig.worldConfig)
    @JoinColumn()
    npcConfig: NPCConfig;
    
    @OneToOne(() => PlayerConfig, (playerConfig)=> playerConfig.worldConfig)
    @JoinColumn()
    playerConfig: PlayerConfig;

    @OneToOne(()=> World, (world)=> world.worldConfig)
    @JoinColumn()
    world: World;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    examples: WorldConfig[];

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