import { IUnitType } from "@warlords/common";
import { Cost } from "./cost";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { World } from "./world";
import { UnitConfig } from "./configure/unitConfig";

@Entity()
export class UnitType implements IUnitType{
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    damage: number;

    @Column()
    health: number;

    @Column()
    agility: number;

    @Column()
    speed: number;

    @Column()
    cargoCapacity: number;

    @Column()
    trainingTime: number;

    @Column()
    range: number;

    @Column()
    txRevivePercentage: number;

    @Column()
    trainingTimeInHours: number;
    
    @ManyToOne(()=> World, (world)=> world.unitTypes)
    world: World;

    @ManyToOne(() => UnitConfig, (unitConfig) => unitConfig.unitsType)
    unitConfig: UnitConfig;

    @ManyToMany(() => Cost)
    @JoinTable()
    cost: Cost[];

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