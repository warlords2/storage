import { IPlayerConfig } from "@warlords/common";

import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { WorldConfig } from "./worldConfig";

@Entity()
export class PlayerConfig implements IPlayerConfig{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: String;

    @Column()
    choiceProvince:boolean;

    @Column()
    choiceCityPosition: boolean;

    @OneToOne(()=> WorldConfig, (worldConfig)=> worldConfig.playerConfig)
    @JoinColumn()
    worldConfig: WorldConfig;

    examples: PlayerConfig[];

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