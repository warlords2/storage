import { IBuildingType } from "@warlords/common";
import { Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { ResourceType } from "./resourceType";
import { Size } from "./geometry/size";
import { UnitType } from "./unitType";
import { Cost } from "./cost";
import { World } from "./world";

@Entity()
export class BuildingType implements IBuildingType {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    name: string;
    @Column()
    max_level: number;
    @Column()
    multiplier: number;
    @Column()
    multiplier_cost: number;
    @Column()
    initial: number;
    @Column()
    hasUnitGenerate: boolean;
    @Column()
    multiplier_unit_cost: number;
    @Column()
    multiplier_unit_time: number;
    @Column()
    hasStore: boolean;
    @Column()
    multiplier_storage: number;

    @ManyToOne(()=> World, (world)=> world.buildingTypes)
    world: World;

    @OneToOne(() => Size)
    @JoinColumn()
    size: Size;

    @ManyToMany(() => UnitType)
    @JoinTable()
    unitsGenerate: UnitType[];

    @ManyToMany(() => ResourceType)
    @JoinTable()
    resources: ResourceType[];

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