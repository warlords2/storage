import { DataSource, Repository } from "typeorm";
import { ConectionParameter } from "./database";
export { DataSource } from "typeorm";
export { User } from "./entities/user";
export { Login } from "./entities/auth/login";
export { TypeLogin } from "./entities/auth/type_login";
export { World } from "./entities/game/world";
export { Resource } from "./entities/game/resource";
export { Province } from "./entities/game/province";
export { Player } from "./entities/game/player";
export { Npc } from "./entities/game/npc";
export { Market } from "./entities/game/market";
export { City } from "./entities/game/city";
export { Building } from "./entities/game/building";
export { Position } from "./entities/game/geometry/position";
export { Offer } from "./entities/game/market/offer";
export { Sale } from "./entities/game/market/sale";
export declare class ManagerDatabase {
    dataSource: DataSource;
    paramDataSource: ConectionParameter;
    constructor(param?: ConectionParameter);
    getConnection(): Promise<DataSource>;
    getRepository(entity_class: any): Repository<any>;
}
