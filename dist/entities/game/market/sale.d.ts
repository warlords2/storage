import { ISale } from '@warlords/common';
import { Market } from '../market';
export declare class Sale implements ISale {
    id: string;
    market: Market;
    constructor(values?: any);
}
