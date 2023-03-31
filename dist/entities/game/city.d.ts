import { City as ICity } from '@warlords/common';
import { Building } from './building';
import { Position } from './geometry/position';
import { Npc } from './npc';
import { Province } from './province';
import { Resource } from './resource';
export declare class City implements ICity {
    id: number;
    name: String;
    owner: Npc;
    position: Position;
    buildings: Building[];
    resources: Resource[];
    province: Province;
    constructor(values?: any);
}
