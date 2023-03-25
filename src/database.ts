import { DataSource, DataSourceOptions } from "typeorm"


const HOST = process.env.HOST || "localhost";
const PORT = Number(process.env.PORT || "5432");
const USERNAME = process.env.USERNAME || "root";
const PASSWORD = process.env.PASSWORD || "123456";
const DATABASE = process.env.DATABASE || "warlords";

export interface ConectionParameter{
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
}

let _con : ConectionParameter = {
    type: "postgres",
    host: HOST,
    port: PORT,
    username: USERNAME,
    password: PASSWORD,
    database: DATABASE,
};

export let buildDatabase = async ( con: ConectionParameter = _con) => {

    let AppConnection = new DataSource({
        type: "postgres",
        host: con.host,
        port: con.port,
        username: con.username,
        password: con.password,
        database: con.database
    });

    return await AppConnection.initialize();
}
