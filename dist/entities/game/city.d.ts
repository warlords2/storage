import { ICity, INpc } from '@warlords/common';
import { Building } from './building';
import { Position } from './geometry/position';
import { Province } from './province';
import { Resource } from './resource';
import { Size } from './geometry/size';
import { World } from './world';
import { Unit } from './unit';
export declare class City implements ICity {
    id: string;
    name: String;
    stability: number;
    owner: INpc;
    position: Position;
    size: Size;
    buildings: Building[];
    resources: Resource[];
    units: Unit[];
    world: World;
    province: Province;
    constructor(values?: any);
}
