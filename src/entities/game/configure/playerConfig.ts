import { IPlayerConfig } from "@warlords/common";

import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

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