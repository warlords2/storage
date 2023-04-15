import { DataSource } from "typeorm";
export interface ConectionParameter {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
}
export declare let buildDatabase: (con?: ConectionParameter) => Promise<DataSource>;
