import { IPosition } from '@warlords/common';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Position implements IPosition{
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    x: number;
    @Column()
    y: number;

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}
