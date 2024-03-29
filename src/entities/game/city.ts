import { ICity } from '@warlords/common';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Building } from './building';
import { Position } from './geometry/position';
import { Npc } from './npc';
import { Province } from './province';
import { Resource } from './resource';
import { Size } from './geometry/size';

@Entity()
export class City implements ICity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: String;

    @ManyToOne(()=> Npc, (npc)=> npc.cities)
    owner: Npc;

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

    @ManyToOne(()=> Province, (province)=> province.cities)
    province: Province;

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}