import { ResourceType, IResource } from "@warlords/common";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { City } from "./city";

@Entity()
export class Resource implements IResource{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    amount: number;
    
    @Column()
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