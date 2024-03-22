import { IResourceType } from "@warlords/common";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ResourceType implements IResourceType{
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: String;

    @Column()
    max_level: number;

    @Column()
    multiplier: number;

    @Column()
    initial: number;

    @Column()
    fixed: boolean;

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}