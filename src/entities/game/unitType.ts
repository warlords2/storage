import { IUnitType } from "@warlords/common";
import { Cost } from "./cost";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { World } from "./world";

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

    @ManyToOne(()=> World, (world)=> world.unitTypes)
    world: World;

    @ManyToMany(() => Cost)
    @JoinTable()
    cost: Cost[];

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}