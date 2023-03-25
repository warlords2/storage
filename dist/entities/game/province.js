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
exports.Province = void 0;
var typeorm_1 = require("typeorm");
var city_1 = require("./city");
var position_1 = require("./geometry/position");
var world_1 = require("./world");
var Province = exports.Province = /** @class */ (function () {
    function Province() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Province.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Province.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return position_1.Position; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", position_1.Position)
    ], Province.prototype, "position", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return world_1.World; }, function (world) { return world.provinces; }),
        __metadata("design:type", world_1.World)
    ], Province.prototype, "world", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return city_1.City; }, function (city) { return city.province; }),
        __metadata("design:type", Array)
    ], Province.prototype, "cities", void 0);
    Province = __decorate([
        (0, typeorm_1.Entity)()
    ], Province);
    return Province;
}());
