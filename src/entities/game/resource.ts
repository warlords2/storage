import { IResource } from "@warlords/common";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { City } from "./city";
import { ResourceType } from "./resourceType";

@Entity()
export class Resource implements IResource{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    amount: number;
    
    @OneToOne(() => ResourceType)
    @JoinColumn()
    type: ResourceType;

    @ManyToOne(()=> City, (city)=> city.resources)
    city: City;

    
    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}