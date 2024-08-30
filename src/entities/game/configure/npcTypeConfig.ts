
import { INPCTypeConfig, NpcType } from "@warlords/common";
import { CityConfig } from "./cityConfig";

import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";
import { Collection, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { NPCConfig } from "./npcConfig";

@Entity()
export class NPCTypeConfig implements INPCTypeConfig{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: String;

    @Column({
        type: "enum",
        enum: NpcType,
        default: NpcType.Ai
    })
    npcType: NpcType;

    @Column()
    minPeerProvince: number;

    @Column()
    maxPeerProvince:number;

    @Column()
    aggressionLevel: number;

    @Column()
    interactionDistance: number;

    @Column()
    useMarket: boolean;

    @ManyToOne(() => NPCConfig, (npcConfig) => npcConfig.npcTypes)
    @JoinColumn()
    npcConfig: NPCConfig;

    @OneToOne(() => CityConfig)
    @JoinColumn()
    cityInitial: CityConfig;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

    isValid(): Promise<ValidationError[]>{

        let groups = undefined;

        let isValid = validate(this, { groups , validationError: { target: false }});

        return isValid;
    }

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
        return;
        }
        Object.assign(this, values);
    }
}
