import { INpc, NpcType } from '@warlords/common';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { City } from './city';
import { World } from './world';

@Entity()
export class Npc implements INpc{

    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    name: String;

    @Column()
    type: NpcType;

    @ManyToOne(()=> World, (world)=> world.npcs)
    world: World;

    @OneToMany(()=> City, (city)=> city.owner)
    cities: City;

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}
