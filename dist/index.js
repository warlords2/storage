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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerDatabase = exports.DataSource = void 0;
var dotenv = require('dotenv');
dotenv.config({ path: './.env' });
var database_1 = require("./database");
var login_1 = require("./entities/auth/login");
var building_1 = require("./entities/game/building");
var city_1 = require("./entities/game/city");
var position_1 = require("./entities/game/geometry/position");
var market_1 = require("./entities/game/market");
var offer_1 = require("./entities/game/market/offer");
var sale_1 = require("./entities/game/market/sale");
var npc_1 = require("./entities/game/npc");
var player_1 = require("./entities/game/player");
var province_1 = require("./entities/game/province");
var resource_1 = require("./entities/game/resource");
var world_1 = require("./entities/game/world");
var user_1 = require("./entities/user");
var typeorm_1 = require("typeorm");
Object.defineProperty(exports, "DataSource", { enumerable: true, get: function () { return typeorm_1.DataSource; } });
/*
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
export { Sale } from "./entities/game/market/sale";*/
// Open connection postgress function
var openConnection = (function (param) {
    if (param === void 0) { param = undefined; }
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(param == undefined)) return [3 /*break*/, 2];
                    return [4 /*yield*/, (0, database_1.buildDatabase)()];
                case 1: return [2 /*return*/, _a.sent()];
                case 2: return [4 /*yield*/, (0, database_1.buildDatabase)(param)];
                case 3: return [2 /*return*/, _a.sent()];
            }
        });
    });
});
var ManagerDatabase = /** @class */ (function () {
    function ManagerDatabase(param) {
        if (param === void 0) { param = undefined; }
        var _this = this;
        // Skeleton
        if (typeof globalThis.database == 'undefined') {
            openConnection(param).then(function (datasource) {
                globalThis.database = {
                    dataSource: datasource
                };
                _this.dataSource = globalThis.database.dataSource;
            }).catch(function (err) {
                console.log("Error in connection :");
                console.error(err);
            });
        }
        else
            this.dataSource = globalThis.database.dataSource;
        this.paramDataSource = param;
    }
    ManagerDatabase.prototype.getConnection = function () {
        var _this = this;
        var ctx = this;
        return new Promise(function (resolve, reject) {
            var _a;
            if ((_a = ctx.dataSource) === null || _a === void 0 ? void 0 : _a.isInitialized) {
                return resolve(_this.dataSource);
            }
            else
                return openConnection(ctx.paramDataSource).then(function (datasource) {
                    globalThis.database = {
                        dataSource: datasource
                    };
                    ctx.dataSource = datasource;
                    return resolve(datasource);
                }).catch(function (err) {
                    console.log("Error in connection :");
                    console.error(err);
                    return reject(err);
                });
        });
    };
    // Try resolve metadata typeorm
    ManagerDatabase.prototype.getRepository = function (entity_class) {
        var type_class = entity_class.name.toLowerCase();
        var class_metadata;
        switch (type_class) {
            case "user":
                return this.dataSource.getRepository(user_1.User);
            case "login":
                return this.dataSource.getRepository(login_1.Login);
            case "world":
                return this.dataSource.getRepository(world_1.World);
            case "resource":
                return this.dataSource.getRepository(resource_1.Resource);
            case "province":
                return this.dataSource.getRepository(province_1.Province);
            case "player":
                return this.dataSource.getRepository(player_1.Player);
            case "npc":
                return this.dataSource.getRepository(npc_1.Npc);
            case "market":
                return this.dataSource.getRepository(market_1.Market);
            case "city":
                return this.dataSource.getRepository(city_1.City);
            case "building":
                return this.dataSource.getRepository(building_1.Building);
            case "position":
                return this.dataSource.getRepository(position_1.Position);
            case "offer":
                return this.dataSource.getRepository(offer_1.Offer);
            case "sale":
                return this.dataSource.getRepository(sale_1.Sale);
        }
    };
    ;
    return ManagerDatabase;
}());
exports.ManagerDatabase = ManagerDatabase;
/*
const database = new ManagerDatabase();
database.getConnection().then(res=>{
    console.log("INICIANDO TESTE")
    //let reposi = database.getRepository(User);
    //reposi.find();
    let reposito = res.getRepository(User);
    reposito.find();
});*/
/*
openConnection().then((datasource: DataSource)=>{
    console.log("INICIANDO TESTE")

    let reposi = datasource.getRepository(User);
    reposi.count();
}).catch(err=>{
    console.log("Error in connection :");
    console.error(err);
})*/ 
