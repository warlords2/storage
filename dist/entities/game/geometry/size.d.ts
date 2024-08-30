import { ISize } from "@warlords/common";
export declare class Size implements ISize {
    id: string;
    height: number;
    width: number;
    weight: number;
    createdAt: Date;
    updatedAt: Date;
    constructor(values?: any);
}
