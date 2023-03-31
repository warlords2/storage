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
exports.Building = void 0;
var typeorm_1 = require("typeorm");
var city_1 = require("./city");
var position_1 = require("./geometry/position");
var Building = exports.Building = /** @class */ (function () {
    function Building(values) {
        if (values === void 0) { values = {}; }
        if (Object.entries(values).length === 0 && values.constructor === Object) {
            return;
        }
        Object.assign(this, values);
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Building.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return city_1.City; }, function (city) { return city.buildings; }),
        __metadata("design:type", city_1.City)
    ], Building.prototype, "city", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return position_1.Position; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", position_1.Position)
    ], Building.prototype, "position", void 0);
    Building = __decorate([
        (0, typeorm_1.Entity)(),
        __metadata("design:paramtypes", [Object])
    ], Building);
    return Building;
}());
