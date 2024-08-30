import { ICityConfig, IProvinceConfig, ISize } from "@warlords/common";
import { Size } from "../geometry/size";
import { CityConfig } from "./cityConfig";

import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { WorldConfig } from "./worldConfig";

@Entity()
export class ProvinceConfig implements IProvinceConfig{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: String;
    
    @Column()
    limitCity: number;

    @Column()
    totalNpcsPeerProvince: number;

    @Column()
    genereteProvince: boolean;
    
    @OneToOne(() => Size)
    @JoinColumn()
    size: Size;

    @OneToOne(() => CityConfig, (cityConfig) => cityConfig.provinceConfig)
    @JoinColumn()
    cityConfig: CityConfig;
    
    @OneToOne(()=> WorldConfig, (worldConfig)=> worldConfig.provinceConfig)
    @JoinColumn()
    worldConfig: WorldConfig;


    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    examples: ProvinceConfig[];

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