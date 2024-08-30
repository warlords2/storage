import { DataSource, DataSourceOptions } from "typeorm"

// User and Authentication
import { User } from "./entities/user";
import { Login } from "./entities/auth/login";
import { LoginType } from "./entities/auth/loginType";

// Game Entities
import { World } from "./entities/game/world";
import { Resource } from "./entities/game/resource";
import { Province } from "./entities/game/province";
import { Player } from "./entities/game/player";
import { Npc } from "./entities/game/npc";
import { Market } from "./entities/game/market";
import { City } from "./entities/game/city";
import { Building } from "./entities/game/building";
import { BuildingType } from "./entities/game/buildingType";
import { Unit } from "./entities/game/unit";
import { UnitType } from "./entities/game/unitType";
import { ResourceType } from "./entities/game/resourceType";

// Game Geometry
import { Position } from "./entities/game/geometry/position";
import { Size } from "./entities/game/geometry/size";

// Game Market
import { Offer } from "./entities/game/market/offer";
import { Sale } from "./entities/game/market/sale";

// Game Costs
import { Cost } from "./entities/game/cost";

// Game Configuration
import { WorldConfig } from "./entities/game/configure/worldConfig";
import { BuildingConfig } from "./entities/game/configure/buildingConfig";
import { CityConfig } from "./entities/game/configure/cityConfig";
import { MarketConfig } from "./entities/game/configure/marketConfig";
import { NPCConfig } from "./entities/game/configure/npcConfig";
import { NPCTypeConfig } from "./entities/game/configure/npcTypeConfig";
import { PlayerConfig } from "./entities/game/configure/playerConfig";
import { ProvinceConfig } from "./entities/game/configure/provinceConfig";
import { ResourceConfig } from "./entities/game/configure/resourceConfig";
import { UnitConfig } from "./entities/game/configure/unitConfig";

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
        entities: [
            // User and Authentication
            User, Login,
            // Game Entities
            World, Resource, Province, Npc, Player, Market, City, Building,
            BuildingType, Unit, UnitType, ResourceType, 
            // Game Geometry
            Position, Size,
            // Game Market
            Offer, Sale,
            // Game Costs
            Cost,
            // Game Configuration
            WorldConfig, BuildingConfig, CityConfig, MarketConfig, NPCConfig,
            NPCTypeConfig, PlayerConfig, ProvinceConfig, ResourceConfig, UnitConfig
        ],
        migrations: ['src/migrations/**(.ts|.js)','src/migrations/*/**(.ts|.js)', 'src/migrations/*/*/**(.ts|.js)'],
        subscribers: ['src/subscribers/**(.ts|.js)','src/subscribers/*/**(.ts|.js)', 'src/subscribers/*/*/**(.ts|.js)']
    });

    return await AppConnection.initialize();
}
