import { Province as IProvince } from '@warlords/common';
import { City } from './city';
import { Position } from './geometry/position';
import { World } from './world';
export declare class Province implements IProvince {
    id: number;
    name: String;
    position: Position;
    world: World;
    cities: City[];
}
