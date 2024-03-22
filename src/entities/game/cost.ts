import { ICost } from "@warlords/common";
import { ResourceType } from "./resourceType";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cost implements ICost{
    
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @ManyToOne(() => ResourceType)
    @JoinColumn()
    resource: ResourceType;

    @Column()
    amount: number;

    @Column()
    fixed: boolean;

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}