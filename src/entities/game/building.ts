import { IBuilding } from "@warlords/common";
import { Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Column } from "typeorm";
import { City } from "./city";
import { Position } from "./geometry/position";
import { BuildingType } from "./buildingType";

@Entity()
export class Building implements IBuilding {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    // @todo criar estutura de produção, eventos de produção de tropa
    // @todo criar estrutura de tempo de contrução e demolição
    
    @Column()
    level: number;

    @ManyToOne(() => BuildingType)
    @JoinColumn()
    buildingType: BuildingType;

    @ManyToOne(()=> City, (city)=> city.buildings)
    city: City;

    @OneToOne(() => Position)
    @JoinColumn()
    position: Position;

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}