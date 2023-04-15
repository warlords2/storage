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
const typeorm_1 = require("typeorm");
const market_1 = require("./market");
const npc_1 = require("./npc");
const player_1 = require("./player");
const province_1 = require("./province");
let World = class World {
    constructor(values = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
            return;
        }
        Object.assign(this, values);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], World.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], World.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => market_1.Market),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", market_1.Market)
], World.prototype, "market", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => province_1.Province, (province) => province.world),
    __metadata("design:type", Array)
], World.prototype, "provinces", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => npc_1.Npc, (npc) => npc.world),
    __metadata("design:type", Array)
], World.prototype, "npcs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => player_1.Player, (player) => player.world),
    __metadata("design:type", Array)
], World.prototype, "players", void 0);
World = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], World);
exports.World = World;
//# sourceMappingURL=world.js.map