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
const login_1 = require("./entities/auth/login");
const building_1 = require("./entities/game/building");
const city_1 = require("./entities/game/city");
const position_1 = require("./entities/game/geometry/position");
const market_1 = require("./entities/game/market");
const offer_1 = require("./entities/game/market/offer");
const sale_1 = require("./entities/game/market/sale");
const npc_1 = require("./entities/game/npc");
const player_1 = require("./entities/game/player");
const province_1 = require("./entities/game/province");
const resource_1 = require("./entities/game/resource");
const world_1 = require("./entities/game/world");
const user_1 = require("./entities/user");
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
        entities: [login_1.Login, building_1.Building, city_1.City, position_1.Position, market_1.Market, offer_1.Offer, sale_1.Sale, npc_1.Npc, player_1.Player, province_1.Province, resource_1.Resource, world_1.World, user_1.User],
        migrations: ['src/migrations/**(.ts|.js)', 'src/migrations/*/**(.ts|.js)', 'src/migrations/*/*/**(.ts|.js)'],
        subscribers: ['src/subscribers/**(.ts|.js)', 'src/subscribers/*/**(.ts|.js)', 'src/subscribers/*/*/**(.ts|.js)']
    });
    return yield AppConnection.initialize();
});
exports.buildDatabase = buildDatabase;
//# sourceMappingURL=database.js.map