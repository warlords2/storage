import { IProvince } from '@warlords/common';
import { City } from './city';
import { Position } from './geometry/position';
import { World } from './world';
import { Size } from './geometry/size';
export declare class Province implements IProvince {
    id: string;
    name: String;
    position: Position;
    world: World;
    size: Size;
    cities: City[];
    createdAt: Date;
    updatedAt: Date;
    constructor(values?: any);
}
