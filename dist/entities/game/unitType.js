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
exports.UnitType = void 0;
const cost_1 = require("./cost");
const typeorm_1 = require("typeorm");
const world_1 = require("./world");
const unitConfig_1 = require("./configure/unitConfig");
let UnitType = class UnitType {
    constructor(values = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
            return;
        }
        Object.assign(this, values);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UnitType.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UnitType.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UnitType.prototype, "damage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UnitType.prototype, "health", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UnitType.prototype, "agility", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UnitType.prototype, "speed", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UnitType.prototype, "cargoCapacity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UnitType.prototype, "trainingTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UnitType.prototype, "range", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UnitType.prototype, "txRevivePercentage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UnitType.prototype, "trainingTimeInHours", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => world_1.World, (world) => world.unitTypes),
    __metadata("design:type", world_1.World)
], UnitType.prototype, "world", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => unitConfig_1.UnitConfig, (unitConfig) => unitConfig.unitsType),
    __metadata("design:type", unitConfig_1.UnitConfig)
], UnitType.prototype, "unitConfig", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => cost_1.Cost),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], UnitType.prototype, "cost", void 0);
UnitType = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], UnitType);
exports.UnitType = UnitType;
//# sourceMappingURL=unitType.js.map