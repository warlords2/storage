import { BuildingType } from "./enum/building_type";
import { Position } from "./geometry/position";
export interface Building {
    type: BuildingType;
    position: Position;
}
