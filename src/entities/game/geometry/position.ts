import { Position as IPosition } from '@warlords/common';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Position implements IPosition{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    x: number;
    @Column()
    y: number;
}
