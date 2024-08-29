import { IUnitConfig, IUnitType } from "@warlords/common";
import { UnitType } from "../unitType";

import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { WorldConfig } from "./worldConfig";

@Entity()
export class UnitConfig implements IUnitConfig{
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: String;
    
    @Column()
    healthInExternalProvincePercentage: number;
    
    @Column()
    damageInExternalProvincePercentage: number;
    
    @Column()
    txReviveInExternalProvincePercentage: number;
    
    @Column()
    agilityInExternalProvincePercentage: number;
    
    @Column()
    rangeInExternalProvincePercentage: number;

    @Column()
    speedInExternalProvincePercentage: number;
    
    @OneToMany(() => UnitType, (unitsType) => unitsType.unitConfig)
    @JoinColumn()
    unitsType: UnitType[];

    @OneToOne(()=> WorldConfig, (worldConfig)=> worldConfig.unitConfig)
    @JoinColumn()
    worldConfig: WorldConfig;

    examples: UnitConfig[];
    

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