import { INPCConfig } from "@warlords/common";
import { NPCTypeConfig } from "./npcTypeConfig";
import { ValidationError } from "class-validator";
import { WorldConfig } from "./worldConfig";
export declare class NPCConfig implements INPCConfig {
    id: string;
    name: String;
    aggressionLevel: number;
    interactionDistance: number;
    npcTypes: NPCTypeConfig[];
    worldConfig: WorldConfig;
    createdAt: Date;
    updatedAt: Date;
    examples: NPCConfig[];
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
