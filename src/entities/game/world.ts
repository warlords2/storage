import { IWorld } from "@warlords/common";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Market } from "./market";
import { Npc } from "./npc";
import { Player } from "./player";
import { Province } from "./province";
import { BuildingType } from "./buildingType";
import { UnitType } from "./unitType";

@Entity()
export class World implements IWorld{
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @OneToOne(() => Market)
    @JoinColumn()
    market: Market;

    @OneToMany(() => Province, (province)=> province.world)
    provinces: Province[];

    @OneToMany(() => BuildingType, (buildingType)=> buildingType.world)
    buildingTypes: BuildingType[];

    @OneToMany(()=> UnitType, (unitType)=> unitType.world)
    unitTypes: UnitType[];

    @OneToMany(() => Npc, (npc)=> npc.world)
    npcs: Npc[];

    @OneToMany(() => Player, (player)=> player.world)
    players: Player[];

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}