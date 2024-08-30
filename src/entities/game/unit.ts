import { IUnit } from "@warlords/common";
import { UnitType } from "./unitType";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { City } from "./city";

@Entity()
export class Unit implements IUnit{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => UnitType)
    @JoinColumn()
    unitType: UnitType;

    @Column()
    ammount: number;

    @ManyToOne(()=> City, (city)=> city.units)
    city: City;

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