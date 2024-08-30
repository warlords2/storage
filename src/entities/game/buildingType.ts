import { IBuildingType } from "@warlords/common";
import { Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { ResourceType } from "./resourceType";
import { Size } from "./geometry/size";
import { UnitType } from "./unitType";
import { Cost } from "./cost";
import { World } from "./world";
import { BuildingConfig } from "./configure/buildingConfig";

@Entity()
export class BuildingType implements IBuildingType {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    hasMaxLevel: boolean;

    @Column()
    maxLevel: number;

    @Column()
    multiplierUnitCost: number;

    @Column()
    multiplierUnitTime: number;

    @Column()
    storeAmount: number;

    @Column()
    multiplierStorage: number;

    @Column()
    hasMarket: boolean;

    @Column()
    initialMaxOffers: number;

    @Column()
    multiplierMaxOffers: number;

    @Column()
    receiveDamage: boolean;

    @Column()
    txRevive: number;

    @Column()
    damage: number;

    @Column()
    health: number;

    @Column()
    agility: number;

    @Column()
    range: number;

    @Column()
    multiplierDamage: number;

    @Column()
    multiplierHealth: number;

    @Column()
    multiplierAgility: number;

    @Column()
    multiplierRange: number;

    @Column()
    multiplierResources: number;

    @Column()
    multiplierCost: number;

    @Column()
    multiplier: number;

    @Column()
    initial: number;

    @Column()
    hasUnitGenerate: boolean;
    
    @Column()
    hasStore: boolean;
    
    @ManyToOne(()=> World, (world)=> world.buildingTypes)
    world: World;

    @OneToOne(() => Size)
    @JoinColumn()
    size: Size;

    @ManyToOne(() => BuildingConfig, (buildingConfig) => buildingConfig.buildingsType)
    buildingConfig: BuildingConfig;

    @ManyToMany(() => UnitType)
    @JoinTable()
    unitsGenerate: UnitType[];

    @ManyToMany(() => ResourceType)
    @JoinTable()
    resources: ResourceType[];

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