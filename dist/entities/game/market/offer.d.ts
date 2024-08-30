import { IOffer } from '@warlords/common';
import { Market } from '../market';
export declare class Offer implements IOffer {
    id: string;
    market: Market;
    createdAt: Date;
    updatedAt: Date;
    constructor(values?: any);
}
