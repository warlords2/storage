import { Npc as INpc, NpcType } from '@warlords/common';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { City } from './city';
import { World } from './world';

@Entity()
export class Npc implements INpc{

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: String;

    @Column()
    type: NpcType;

    @ManyToOne(()=> World, (world)=> world.npcs)
    world: World;

    @OneToMany(()=> City, (city)=> city.owner)
    cities: City;
}
