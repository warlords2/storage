import { INpc, IPlayer, IProvince, IWorld } from "@warlords/common";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Market } from "./market";
import { Npc } from "./npc";
import { Player } from "./player";
import { Province } from "./province";
import { BuildingType } from "./buildingType";
import { UnitType } from "./unitType";
import { WorldConfig } from "./configure/worldConfig";
import { City } from "./city";

@Entity()
export class World implements IWorld{
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @OneToOne(() => Market, (market)=> market.world)
    @JoinColumn()
    market: Market;

    @OneToMany(() => Province, (province)=> province.world)
    @JoinColumn()
    provinces: Province[];

    @OneToMany(() => City, (city)=> city.world)
    @JoinColumn()
    cities: City[];

    @OneToMany(() => BuildingType, (buildingType)=> buildingType.world)
    @JoinColumn()
    buildingTypes: BuildingType[];

    @OneToMany(()=> UnitType, (unitType)=> unitType.world)
    @JoinColumn()
    unitTypes: UnitType[];

    @OneToMany(() => Npc, (npc)=> npc.world)
    @JoinColumn()
    npcs: Npc[];

    @OneToOne(() => WorldConfig, (worldConfig) => worldConfig.world)
    @JoinColumn()
    worldConfig: WorldConfig;

    @OneToMany(() => Player, (player)=> player.world)
    @JoinColumn()
    players: Player[];

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