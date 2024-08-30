import { IResourceConfig, IResourceType } from "@warlords/common";
import { ResourceType } from "../resourceType";

import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { WorldConfig } from "./worldConfig";

@Entity()
export class ResourceConfig implements IResourceConfig{
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: String;

    @OneToMany(() => ResourceType, (resourcesType) => resourcesType.resourceConfig)
    @JoinColumn()
    resourcesType: ResourceType[];

    @OneToOne(()=> WorldConfig, (worldConfig)=> worldConfig.resourceConfig)
    @JoinColumn()
    worldConfig: WorldConfig;


    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    examples: ResourceConfig[];

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