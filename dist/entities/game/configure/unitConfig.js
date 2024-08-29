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
exports.UnitConfig = void 0;
const unitType_1 = require("../unitType");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const worldConfig_1 = require("./worldConfig");
let UnitConfig = class UnitConfig {
    isValid() {
        let groups = undefined;
        let isValid = (0, class_validator_1.validate)(this, { groups, validationError: { target: false } });
        return isValid;
    }
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
], UnitConfig.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UnitConfig.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UnitConfig.prototype, "healthInExternalProvincePercentage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UnitConfig.prototype, "damageInExternalProvincePercentage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UnitConfig.prototype, "txReviveInExternalProvincePercentage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UnitConfig.prototype, "agilityInExternalProvincePercentage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UnitConfig.prototype, "rangeInExternalProvincePercentage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UnitConfig.prototype, "speedInExternalProvincePercentage", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => unitType_1.UnitType, (unitsType) => unitsType.unitConfig),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], UnitConfig.prototype, "unitsType", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => worldConfig_1.WorldConfig, (worldConfig) => worldConfig.unitConfig),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", worldConfig_1.WorldConfig)
], UnitConfig.prototype, "worldConfig", void 0);
UnitConfig = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], UnitConfig);
exports.UnitConfig = UnitConfig;
//# sourceMappingURL=unitConfig.js.map