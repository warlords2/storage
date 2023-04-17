import { IProvince } from '@warlords/common';
import { City } from './city';
import { Position } from './geometry/position';
import { World } from './world';
export declare class Province implements IProvince {
    id: string;
    name: String;
    position: Position;
    world: World;
    cities: City[];
    constructor(values?: any);
}
