import { IResourceType } from "@warlords/common";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ResourceConfig } from "./configure/resourceConfig";

@Entity()
export class ResourceType implements IResourceType{
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: String;

    @Column()
    hasMaxLevel: boolean;

    @Column()
    maxLevel: number;

    @Column()
    multiplier: number;

    @Column()
    initial: number;
    
    @Column()
    noMarket: boolean;

    @Column()
    fixed: boolean;

    @ManyToOne(() => ResourceConfig, (resourceConfig) => resourceConfig.resourcesType)
    resourceConfig: ResourceConfig;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}