import { IResource } from "@warlords/common";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { City } from "./city";
import { ResourceType } from "./resourceType";

@Entity()
export class Resource implements IResource{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'timestamp' })
    updateAmountAt: Date;

    @Column()
    amount: number;
    
    @OneToOne(() => ResourceType)
    @JoinColumn()
    resourceType: ResourceType;

    @ManyToOne(()=> City, (city)=> city.resources)
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