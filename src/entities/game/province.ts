import { IProvince } from '@warlords/common';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { City } from './city';
import { Position } from './geometry/position';
import { World } from './world';

@Entity()
export class Province implements IProvince{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @OneToOne(() => Position)
    @JoinColumn()
    position: Position;

    @ManyToOne(()=> World, (world)=> world.provinces)
    world: World;
    
    @OneToMany(()=> City, (city)=> city.province)
    cities: City[];

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}