import { DataSource } from "typeorm";
import { ConectionParameter } from "./database";
export { DataSource } from "typeorm";
export declare class ManagerDatabase {
    dataSource: DataSource;
    paramDataSource: ConectionParameter;
    constructor(param?: ConectionParameter);
    getConnection(): Promise<DataSource>;
}
