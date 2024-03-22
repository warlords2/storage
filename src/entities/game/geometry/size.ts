import { ISize } from "@warlords/common";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Size implements ISize{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    height: number;
    @Column()
    width: number;
    @Column()
    weight: number;

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}