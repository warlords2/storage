import { IBuildingConfig } from "@warlords/common";
import { BuildingType } from "../buildingType";

import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { WorldConfig } from "./worldConfig";

@Entity()
export class BuildingConfig implements IBuildingConfig{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: String;
    
    @OneToMany(() => BuildingType, (buildingsType)=> buildingsType.buildingConfig)
    @JoinColumn()
    buildingsType: BuildingType[];
    
    @OneToOne(()=> WorldConfig, (worldConfig)=> worldConfig.buildingConfig)
    @JoinColumn()
    worldConfig: WorldConfig;

    examples: BuildingConfig[];

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