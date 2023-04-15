import { Offer as IOffer } from '@warlords/common';
import { Market } from '../market';
export declare class Offer implements IOffer {
    id: number;
    market: Market;
    constructor(values?: any);
}
