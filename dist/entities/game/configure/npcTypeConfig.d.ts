import { INPCTypeConfig, NpcType } from "@warlords/common";
import { CityConfig } from "./cityConfig";
import { ValidationError } from "class-validator";
import { NPCConfig } from "./npcConfig";
export declare class NPCTypeConfig implements INPCTypeConfig {
    id: string;
    name: String;
    npcType: NpcType;
    minPeerProvince: number;
    maxPeerProvince: number;
    aggressionLevel: number;
    interactionDistance: number;
    useMarket: boolean;
    npcConfig: NPCConfig;
    cityInitial: CityConfig;
    createdAt: Date;
    updatedAt: Date;
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
