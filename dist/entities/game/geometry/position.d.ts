import { IPosition } from '@warlords/common';
export declare class Position implements IPosition {
    id: string;
    x: number;
    y: number;
    z: number;
    createdAt: Date;
    updatedAt: Date;
    constructor(values?: any);
}
