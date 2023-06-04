import { DataSource, DataSourceOptions } from "typeorm"

import { Login } from "./entities/auth/login";
import { Building } from "./entities/game/building";
import { City } from "./entities/game/city";
import { Position } from "./entities/game/geometry/position";
import { Market } from "./entities/game/market";
import { Offer } from "./entities/game/market/offer";
import { Sale } from "./entities/game/market/sale";
import { Npc } from "./entities/game/npc";
import { Player } from "./entities/game/player";
import { Province } from "./entities/game/province";
import { Resource } from "./entities/game/resource";
import { World } from "./entities/game/world";
import { User } from "./entities/user";

const HOST = process.env.DATABASE_HOST || process.env.POSTGRES_HOST || "localhost";
const PORT = Number(process.env.POSTGRES_PORT || "5432");
const USERNAME = process.env.POSTGRES_USER || "root";
const PASSWORD = process.env.POSTGRES_PASSWORD || "123456";
const DATABASE = process.env.POSTGRES_DB || "warlords";

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
        database: con.database,
        entities: [Login, Building, City, Position, Market, Offer, Sale, Npc, Player, Province, Resource, World, User],
        migrations: ['src/migrations/**(.ts|.js)','src/migrations/*/**(.ts|.js)', 'src/migrations/*/*/**(.ts|.js)'],
        subscribers: ['src/subscribers/**(.ts|.js)','src/subscribers/*/**(.ts|.js)', 'src/subscribers/*/*/**(.ts|.js)']
    });

    return await AppConnection.initialize();
}
