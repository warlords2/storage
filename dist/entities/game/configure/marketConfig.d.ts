import { IMarketConfig } from "@warlords/common";
import { ValidationError } from "class-validator";
import { WorldConfig } from "./worldConfig";
export declare class MarketConfig implements IMarketConfig {
    id: string;
    name: String;
    txPercentage: number;
    hasMaxOffersForPlayer: boolean;
    maxOffersForPlayer: number;
    hasMaxOffersForCity: boolean;
    maxMaxOffersForCity: number;
    limitedTimeOffers: boolean;
    limitTimeOffersInHours: number;
    limitedDistanceTrade: boolean;
    limitDistanceTrade: number;
    limitedProvinceSaltTrade: boolean;
    limitProvinceSaltTrade: number;
    worldConfig: WorldConfig;
    createdAt: Date;
    updatedAt: Date;
    examples: MarketConfig[];
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
