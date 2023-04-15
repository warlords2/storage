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
exports.ManagerDatabase = exports.Sale = exports.Offer = exports.Position = exports.Building = exports.City = exports.Market = exports.Npc = exports.Player = exports.Province = exports.Resource = exports.World = exports.TypeLogin = exports.Login = exports.User = exports.DataSource = void 0;
let dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const database_1 = require("./database");
var typeorm_1 = require("typeorm");
Object.defineProperty(exports, "DataSource", { enumerable: true, get: function () { return typeorm_1.DataSource; } });
var user_1 = require("./entities/user");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_1.User; } });
var login_1 = require("./entities/auth/login");
Object.defineProperty(exports, "Login", { enumerable: true, get: function () { return login_1.Login; } });
var type_login_1 = require("./entities/auth/type_login");
Object.defineProperty(exports, "TypeLogin", { enumerable: true, get: function () { return type_login_1.TypeLogin; } });
var world_1 = require("./entities/game/world");
Object.defineProperty(exports, "World", { enumerable: true, get: function () { return world_1.World; } });
var resource_1 = require("./entities/game/resource");
Object.defineProperty(exports, "Resource", { enumerable: true, get: function () { return resource_1.Resource; } });
var province_1 = require("./entities/game/province");
Object.defineProperty(exports, "Province", { enumerable: true, get: function () { return province_1.Province; } });
var player_1 = require("./entities/game/player");
Object.defineProperty(exports, "Player", { enumerable: true, get: function () { return player_1.Player; } });
var npc_1 = require("./entities/game/npc");
Object.defineProperty(exports, "Npc", { enumerable: true, get: function () { return npc_1.Npc; } });
var market_1 = require("./entities/game/market");
Object.defineProperty(exports, "Market", { enumerable: true, get: function () { return market_1.Market; } });
var city_1 = require("./entities/game/city");
Object.defineProperty(exports, "City", { enumerable: true, get: function () { return city_1.City; } });
var building_1 = require("./entities/game/building");
Object.defineProperty(exports, "Building", { enumerable: true, get: function () { return building_1.Building; } });
var position_1 = require("./entities/game/geometry/position");
Object.defineProperty(exports, "Position", { enumerable: true, get: function () { return position_1.Position; } });
var offer_1 = require("./entities/game/market/offer");
Object.defineProperty(exports, "Offer", { enumerable: true, get: function () { return offer_1.Offer; } });
var sale_1 = require("./entities/game/market/sale");
Object.defineProperty(exports, "Sale", { enumerable: true, get: function () { return sale_1.Sale; } });
// Open connection postgress function
let openConnection = ((param = undefined) => __awaiter(void 0, void 0, void 0, function* () {
    if (param == undefined)
        return yield (0, database_1.buildDatabase)();
    else
        return yield (0, database_1.buildDatabase)(param);
}));
class ManagerDatabase {
    constructor(param = undefined) {
        // Skeleton
        if (typeof globalThis.database == 'undefined') {
            openConnection(param).then((datasource) => {
                globalThis.database = {
                    dataSource: datasource
                };
                this.dataSource = globalThis.database.dataSource;
            }).catch(err => {
                console.log("Error in connection :");
                console.error(err);
            });
        }
        else
            this.dataSource = globalThis.database.dataSource;
        this.paramDataSource = param;
    }
    getConnection() {
        let ctx = this;
        return new Promise((resolve, reject) => {
            var _a;
            if ((_a = ctx.dataSource) === null || _a === void 0 ? void 0 : _a.isInitialized) {
                return resolve(this.dataSource);
            }
            else
                return openConnection(ctx.paramDataSource).then((datasource) => {
                    globalThis.database = {
                        dataSource: datasource
                    };
                    ctx.dataSource = datasource;
                    return resolve(datasource);
                }).catch(err => {
                    console.log("Error in connection :");
                    console.error(err);
                    return reject(err);
                });
        });
    }
}
exports.ManagerDatabase = ManagerDatabase;
/* Test
openConnection().then(async (datasource: DataSource)=>{
    console.log("INICIANDO TESTE")

    let reposi = datasource.getRepository(User);
    console.log(await reposi.count());

}).catch(err=>{
    console.log("Error in connection :");
    console.error(err);
})
*/ 
//# sourceMappingURL=index.js.map