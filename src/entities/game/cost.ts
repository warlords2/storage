import { ICost } from "@warlords/common";
import { ResourceType } from "./resourceType";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Cost implements ICost{
    
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @ManyToOne(() => ResourceType)
    @JoinColumn()
    resourceType: ResourceType;

    @Column()
    amount: number;

    @Column()
    fixed: boolean;

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