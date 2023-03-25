import { ResourceScale } from "./resource.scale.production";
import { Scale } from "./scale.production";
export interface ProvinceScale extends Scale {
    resources: ResourceScale[];
}
