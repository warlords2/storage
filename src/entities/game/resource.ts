import { ResourceType, Resource as IResource } from "@warlords/common";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { City } from "./city";

@Entity()
export class Resource implements IResource{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;
    
    @Column()
    type: ResourceType;

    @ManyToOne(()=> City, (city)=> city.resources)
    city: City;
}