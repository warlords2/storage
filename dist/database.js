"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildDatabase = void 0;
const typeorm_1 = require("typeorm");
// User and Authentication
const user_1 = require("./entities/user");
const login_1 = require("./entities/auth/login");
// Game Entities
const world_1 = require("./entities/game/world");
const resource_1 = require("./entities/game/resource");
const province_1 = require("./entities/game/province");
const player_1 = require("./entities/game/player");
const npc_1 = require("./entities/game/npc");
const market_1 = require("./entities/game/market");
const city_1 = require("./entities/game/city");
const building_1 = require("./entities/game/building");
const buildingType_1 = require("./entities/game/buildingType");
const unit_1 = require("./entities/game/unit");
const unitType_1 = require("./entities/game/unitType");
const resourceType_1 = require("./entities/game/resourceType");
// Game Geometry
const position_1 = require("./entities/game/geometry/position");
const size_1 = require("./entities/game/geometry/size");
// Game Market
const offer_1 = require("./entities/game/market/offer");
const sale_1 = require("./entities/game/market/sale");
// Game Costs
const cost_1 = require("./entities/game/cost");
// Game Configuration
const worldConfig_1 = require("./entities/game/configure/worldConfig");
const buildingConfig_1 = require("./entities/game/configure/buildingConfig");
const cityConfig_1 = require("./entities/game/configure/cityConfig");
const marketConfig_1 = require("./entities/game/configure/marketConfig");
const npcConfig_1 = require("./entities/game/configure/npcConfig");
const npcTypeConfig_1 = require("./entities/game/configure/npcTypeConfig");
const playerConfig_1 = require("./entities/game/configure/playerConfig");
const provinceConfig_1 = require("./entities/game/configure/provinceConfig");
const resourceConfig_1 = require("./entities/game/configure/resourceConfig");
const unitConfig_1 = require("./entities/game/configure/unitConfig");
const HOST = process.env.DATABASE_HOST || process.env.POSTGRES_HOST || "localhost";
const PORT = Number(process.env.POSTGRES_PORT || "5432");
const USERNAME = process.env.POSTGRES_USER || "root";
const PASSWORD = process.env.POSTGRES_PASSWORD || "123456";
const DATABASE = process.env.POSTGRES_DB || "warlords";
let _con = {
    type: "postgres",
    host: HOST,
    port: PORT,
    username: USERNAME,
    password: PASSWORD,
    database: DATABASE,
};
let buildDatabase = (con = _con) => __awaiter(void 0, void 0, void 0, function* () {
    let AppConnection = new typeorm_1.DataSource({
        type: "postgres",
        host: con.host,
        port: con.port,
        username: con.username,
        password: con.password,
        database: con.database,
        entities: [
            // User and Authentication
            user_1.User, login_1.Login,
            // Game Entities
            world_1.World, resource_1.Resource, province_1.Province, npc_1.Npc, player_1.Player, market_1.Market, city_1.City, building_1.Building,
            buildingType_1.BuildingType, unit_1.Unit, unitType_1.UnitType, resourceType_1.ResourceType,
            // Game Geometry
            position_1.Position, size_1.Size,
            // Game Market
            offer_1.Offer, sale_1.Sale,
            // Game Costs
            cost_1.Cost,
            // Game Configuration
            worldConfig_1.WorldConfig, buildingConfig_1.BuildingConfig, cityConfig_1.CityConfig, marketConfig_1.MarketConfig, npcConfig_1.NPCConfig,
            npcTypeConfig_1.NPCTypeConfig, playerConfig_1.PlayerConfig, provinceConfig_1.ProvinceConfig, resourceConfig_1.ResourceConfig, unitConfig_1.UnitConfig
        ],
        migrations: ['src/migrations/**(.ts|.js)', 'src/migrations/*/**(.ts|.js)', 'src/migrations/*/*/**(.ts|.js)'],
        subscribers: ['src/subscribers/**(.ts|.js)', 'src/subscribers/*/**(.ts|.js)', 'src/subscribers/*/*/**(.ts|.js)']
    });
    return yield AppConnection.initialize();
});
exports.buildDatabase = buildDatabase;
//# sourceMappingURL=database.js.map