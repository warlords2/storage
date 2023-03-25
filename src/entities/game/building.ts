import { BuildingType, Building as IBuilding } from "@warlords/common";
import { Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { City } from "./city";
import { Position } from "./geometry/position";

@Entity()
export class Building implements IBuilding {

    @PrimaryGeneratedColumn()
    id: number;

    type: BuildingType;
    
    @ManyToOne(()=> City, (city)=> city.buildings)
    city: City;

    @OneToOne(() => Position)
    @JoinColumn()
    position: Position;
}