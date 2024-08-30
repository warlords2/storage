import { INPCConfig } from "@warlords/common";
import { NPCTypeConfig } from "./npcTypeConfig";


import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { WorldConfig } from "./worldConfig";

@Entity()
export class NPCConfig implements INPCConfig{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: String;

    @Column()
    aggressionLevel: number;

    @Column()
    interactionDistance: number;
    
    @OneToMany(() => NPCTypeConfig, (npcTypes) => npcTypes.npcConfig)
    @JoinColumn()
    npcTypes: NPCTypeConfig[];


    @OneToOne(()=> WorldConfig, (worldConfig)=> worldConfig.npcConfig)
    @JoinColumn()
    worldConfig: WorldConfig;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    examples: NPCConfig[];

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