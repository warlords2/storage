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
exports.ManagerDatabase = exports.UnitConfig = exports.ResourceConfig = exports.ProvinceConfig = exports.PlayerConfig = exports.NPCTypeConfig = exports.NPCConfig = exports.MarketConfig = exports.CityConfig = exports.BuildingConfig = exports.WorldConfig = exports.Cost = exports.Sale = exports.Offer = exports.Size = exports.Position = exports.ResourceType = exports.UnitType = exports.Unit = exports.BuildingType = exports.Building = exports.City = exports.Market = exports.Npc = exports.Player = exports.Province = exports.Resource = exports.World = exports.LoginType = exports.Login = exports.User = exports.DataSource = void 0;
let dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const database_1 = require("./database");
var typeorm_1 = require("typeorm");
Object.defineProperty(exports, "DataSource", { enumerable: true, get: function () { return typeorm_1.DataSource; } });
// User and Authentication
var user_1 = require("./entities/user");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_1.User; } });
var login_1 = require("./entities/auth/login");
Object.defineProperty(exports, "Login", { enumerable: true, get: function () { return login_1.Login; } });
var loginType_1 = require("./entities/auth/loginType");
Object.defineProperty(exports, "LoginType", { enumerable: true, get: function () { return loginType_1.LoginType; } });
// Game Entities
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
var buildingType_1 = require("./entities/game/buildingType");
Object.defineProperty(exports, "BuildingType", { enumerable: true, get: function () { return buildingType_1.BuildingType; } });
var unit_1 = require("./entities/game/unit");
Object.defineProperty(exports, "Unit", { enumerable: true, get: function () { return unit_1.Unit; } });
var unitType_1 = require("./entities/game/unitType");
Object.defineProperty(exports, "UnitType", { enumerable: true, get: function () { return unitType_1.UnitType; } });
var resourceType_1 = require("./entities/game/resourceType");
Object.defineProperty(exports, "ResourceType", { enumerable: true, get: function () { return resourceType_1.ResourceType; } });
// Game Geometry
var position_1 = require("./entities/game/geometry/position");
Object.defineProperty(exports, "Position", { enumerable: true, get: function () { return position_1.Position; } });
var size_1 = require("./entities/game/geometry/size");
Object.defineProperty(exports, "Size", { enumerable: true, get: function () { return size_1.Size; } });
// Game Market
var offer_1 = require("./entities/game/market/offer");
Object.defineProperty(exports, "Offer", { enumerable: true, get: function () { return offer_1.Offer; } });
var sale_1 = require("./entities/game/market/sale");
Object.defineProperty(exports, "Sale", { enumerable: true, get: function () { return sale_1.Sale; } });
// Game Costs
var cost_1 = require("./entities/game/cost");
Object.defineProperty(exports, "Cost", { enumerable: true, get: function () { return cost_1.Cost; } });
// Game Configuration
var worldConfig_1 = require("./entities/game/configure/worldConfig");
Object.defineProperty(exports, "WorldConfig", { enumerable: true, get: function () { return worldConfig_1.WorldConfig; } });
var buildingConfig_1 = require("./entities/game/configure/buildingConfig");
Object.defineProperty(exports, "BuildingConfig", { enumerable: true, get: function () { return buildingConfig_1.BuildingConfig; } });
var cityConfig_1 = require("./entities/game/configure/cityConfig");
Object.defineProperty(exports, "CityConfig", { enumerable: true, get: function () { return cityConfig_1.CityConfig; } });
var marketConfig_1 = require("./entities/game/configure/marketConfig");
Object.defineProperty(exports, "MarketConfig", { enumerable: true, get: function () { return marketConfig_1.MarketConfig; } });
var npcConfig_1 = require("./entities/game/configure/npcConfig");
Object.defineProperty(exports, "NPCConfig", { enumerable: true, get: function () { return npcConfig_1.NPCConfig; } });
var npcTypeConfig_1 = require("./entities/game/configure/npcTypeConfig");
Object.defineProperty(exports, "NPCTypeConfig", { enumerable: true, get: function () { return npcTypeConfig_1.NPCTypeConfig; } });
var playerConfig_1 = require("./entities/game/configure/playerConfig");
Object.defineProperty(exports, "PlayerConfig", { enumerable: true, get: function () { return playerConfig_1.PlayerConfig; } });
var provinceConfig_1 = require("./entities/game/configure/provinceConfig");
Object.defineProperty(exports, "ProvinceConfig", { enumerable: true, get: function () { return provinceConfig_1.ProvinceConfig; } });
var resourceConfig_1 = require("./entities/game/configure/resourceConfig");
Object.defineProperty(exports, "ResourceConfig", { enumerable: true, get: function () { return resourceConfig_1.ResourceConfig; } });
var unitConfig_1 = require("./entities/game/configure/unitConfig");
Object.defineProperty(exports, "UnitConfig", { enumerable: true, get: function () { return unitConfig_1.UnitConfig; } });
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
    // Try resolve metadata typeorm
    getRepository(entity_class) {
        return this.dataSource.getRepository(entity_class);
        /*
        let type_class = entity_class.name.toLowerCase();
        
        let class_metadata:any;

        switch(type_class){
            case "user":
                return this.dataSource.getRepository(User);
            case "login":
                return this.dataSource.getRepository(Login);
            case "world":
                return this.dataSource.getRepository(World);
            case "resource":
                return this.dataSource.getRepository(Resource);
            case "province":
                return this.dataSource.getRepository(Province);
            case "player":
                return this.dataSource.getRepository(Player);
            case "npc":
                return this.dataSource.getRepository(Npc);
            case "market":
                return this.dataSource.getRepository(Market);
            case "city":
                return this.dataSource.getRepository(City);
            case "building":
                return this.dataSource.getRepository(Building);
            case "position":
                return this.dataSource.getRepository(Position);
            case "offer":
                return this.dataSource.getRepository(Offer);
            case "sale":
                return this.dataSource.getRepository(Sale);
        }*/
    }
    ;
}
exports.ManagerDatabase = ManagerDatabase;
/* Test */
const user_2 = require("./entities/user");
openConnection().then((datasource) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("INICIANDO TESTE");
    let reposi = datasource.getRepository(user_2.User);
    console.log(yield reposi.count());
})).catch(err => {
    console.log("Error in connection :");
    console.error(err);
});
/**/ 
//# sourceMappingURL=index.js.map