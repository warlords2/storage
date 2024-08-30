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
exports.BuildingType = void 0;
const typeorm_1 = require("typeorm");
const resourceType_1 = require("./resourceType");
const size_1 = require("./geometry/size");
const unitType_1 = require("./unitType");
const cost_1 = require("./cost");
const world_1 = require("./world");
const buildingConfig_1 = require("./configure/buildingConfig");
let BuildingType = class BuildingType {
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
], BuildingType.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BuildingType.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], BuildingType.prototype, "hasMaxLevel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BuildingType.prototype, "maxLevel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BuildingType.prototype, "multiplierUnitCost", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BuildingType.prototype, "multiplierUnitTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BuildingType.prototype, "storeAmount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BuildingType.prototype, "multiplierStorage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], BuildingType.prototype, "hasMarket", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BuildingType.prototype, "initialMaxOffers", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BuildingType.prototype, "multiplierMaxOffers", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], BuildingType.prototype, "receiveDamage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BuildingType.prototype, "txRevive", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BuildingType.prototype, "damage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BuildingType.prototype, "health", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BuildingType.prototype, "agility", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BuildingType.prototype, "range", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BuildingType.prototype, "multiplierDamage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BuildingType.prototype, "multiplierHealth", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BuildingType.prototype, "multiplierAgility", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BuildingType.prototype, "multiplierRange", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BuildingType.prototype, "multiplierResources", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BuildingType.prototype, "multiplierCost", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BuildingType.prototype, "multiplier", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BuildingType.prototype, "initial", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], BuildingType.prototype, "hasUnitGenerate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], BuildingType.prototype, "hasStore", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => world_1.World, (world) => world.buildingTypes),
    __metadata("design:type", world_1.World)
], BuildingType.prototype, "world", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => size_1.Size),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", size_1.Size)
], BuildingType.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => buildingConfig_1.BuildingConfig, (buildingConfig) => buildingConfig.buildingsType),
    __metadata("design:type", buildingConfig_1.BuildingConfig)
], BuildingType.prototype, "buildingConfig", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => unitType_1.UnitType),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], BuildingType.prototype, "unitsGenerate", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => resourceType_1.ResourceType),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], BuildingType.prototype, "resources", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => cost_1.Cost),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], BuildingType.prototype, "cost", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], BuildingType.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], BuildingType.prototype, "updatedAt", void 0);
BuildingType = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], BuildingType);
exports.BuildingType = BuildingType;
//# sourceMappingURL=buildingType.js.map