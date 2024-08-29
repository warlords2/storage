import { ICity, INpc } from '@warlords/common';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Building } from './building';
import { Position } from './geometry/position';
import { Npc } from './npc';
import { Province } from './province';
import { Resource } from './resource';
import { Size } from './geometry/size';
import { World } from './world';
import { Unit } from './unit';

@Entity()
export class City implements ICity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: String;
    
    @Column()
    stability: number;
    
    @ManyToOne(()=> Npc, (npc)=> npc.cities)
    owner: INpc;

    @OneToOne(() => Position)
    @JoinColumn()
    position: Position;

    @OneToOne(() => Size)
    @JoinColumn()
    size: Size;

    @OneToMany(()=> Building, (building) => building.city)
    buildings: Building[];

    @OneToMany(()=> Resource, (resource) => resource.city)
    resources: Resource[];

    @OneToMany(()=> Unit, (unit) => unit.city)
    units: Unit[];

    @ManyToOne(() => World, (world) => world.cities)
    world: World;

    @ManyToOne(()=> Province, (province)=> province.cities)
    province: Province;

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}