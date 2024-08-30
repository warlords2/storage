import { ICityConfig } from "@warlords/common";
import { Size } from "../geometry/size";
import { Building } from "../building";
import { Resource } from "../resource";
import { Unit } from "../unit";

import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProvinceConfig } from "./provinceConfig";

@Entity()
export class CityConfig implements ICityConfig{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    initialStability: number;
    
    @OneToOne(() => Size)
    @JoinColumn()
    initialSize: Size;

    @ManyToMany(() => Building)
    @JoinColumn()
    initialBuildings: Building[];

    @ManyToMany(() => Resource)
    @JoinColumn()
    initialResources: Resource[];
    
    @ManyToMany(() => Unit)
    @JoinColumn()
    initialUnits: Unit[];

    @OneToOne(() => ProvinceConfig, (provinceConfig) => provinceConfig.cityConfig)
    @JoinColumn()
    provinceConfig: ProvinceConfig;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    examples: ICityConfig[];

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