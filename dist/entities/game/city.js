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
exports.City = void 0;
var typeorm_1 = require("typeorm");
var building_1 = require("./building");
var position_1 = require("./geometry/position");
var npc_1 = require("./npc");
var province_1 = require("./province");
var resource_1 = require("./resource");
var City = exports.City = /** @class */ (function () {
    function City() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], City.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], City.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return npc_1.Npc; }, function (npc) { return npc.cities; }),
        __metadata("design:type", npc_1.Npc)
    ], City.prototype, "owner", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return position_1.Position; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", position_1.Position)
    ], City.prototype, "position", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return building_1.Building; }, function (building) { return building.city; }),
        __metadata("design:type", Array)
    ], City.prototype, "buildings", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return resource_1.Resource; }, function (resource) { return resource.city; }),
        __metadata("design:type", Array)
    ], City.prototype, "resources", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return province_1.Province; }, function (province) { return province.cities; }),
        __metadata("design:type", province_1.Province)
    ], City.prototype, "province", void 0);
    City = __decorate([
        (0, typeorm_1.Entity)()
    ], City);
    return City;
}());
