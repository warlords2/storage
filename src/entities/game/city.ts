import { City as ICity } from '@warlords/common';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Building } from './building';
import { Position } from './geometry/position';
import { Npc } from './npc';
import { Province } from './province';
import { Resource } from './resource';

@Entity()
export class City implements ICity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @ManyToOne(()=> Npc, (npc)=> npc.cities)
    owner: Npc;

    @OneToOne(() => Position)
    @JoinColumn()
    position: Position;

    @OneToMany(()=> Building, (building) => building.city)
    buildings: Building[];

    @OneToMany(()=> Resource, (resource) => resource.city)
    resources: Resource[];

    @ManyToOne(()=> Province, (province)=> province.cities)
    province: Province;
}