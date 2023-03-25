"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.World = void 0;
var typeorm_1 = require("typeorm");
var market_1 = require("./market");
var npc_1 = require("./npc");
var player_1 = require("./player");
var province_1 = require("./province");
var World = exports.World = /** @class */ (function () {
    function World() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], World.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], World.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return market_1.Market; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", market_1.Market)
    ], World.prototype, "market", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return province_1.Province; }, function (province) { return province.world; }),
        __metadata("design:type", Array)
    ], World.prototype, "provinces", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return npc_1.Npc; }, function (npc) { return npc.world; }),
        __metadata("design:type", Array)
    ], World.prototype, "npcs", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return player_1.Player; }, function (player) { return player.world; }),
        __metadata("design:type", Array)
    ], World.prototype, "players", void 0);
    World = __decorate([
        (0, typeorm_1.Entity)()
    ], World);
    return World;
}());
