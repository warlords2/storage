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
exports.Npc = void 0;
var common_1 = require("@warlords/common");
var typeorm_1 = require("typeorm");
var city_1 = require("./city");
var world_1 = require("./world");
var Npc = exports.Npc = /** @class */ (function () {
    function Npc() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Npc.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Npc.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Npc.prototype, "type", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return world_1.World; }, function (world) { return world.npcs; }),
        __metadata("design:type", world_1.World)
    ], Npc.prototype, "world", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return city_1.City; }, function (city) { return city.owner; }),
        __metadata("design:type", city_1.City)
    ], Npc.prototype, "cities", void 0);
    Npc = __decorate([
        (0, typeorm_1.Entity)()
    ], Npc);
    return Npc;
}());
