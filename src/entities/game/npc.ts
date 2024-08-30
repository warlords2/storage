import { INpc, NpcType } from '@warlords/common';
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { City } from './city';
import { World } from './world';

@Entity()
export class Npc implements INpc{

    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    name: String;

    @Column({
      type: "enum",
      enum: NpcType,
      default: NpcType.Ai
    })
    npcType: NpcType;

    @ManyToOne(()=> World, (world)=> world.npcs)
    world: World;

    @OneToMany(()=> City, (city)=> city.owner)
    cities: City[];

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
