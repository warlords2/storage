import { ResourceType } from "../enum/resource_type";
import { Scale } from "./scale.production";
export interface ResourceScale extends Scale {
    type_generate: ResourceType;
}
