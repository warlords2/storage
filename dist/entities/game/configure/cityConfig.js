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
exports.CityConfig = void 0;
const size_1 = require("../geometry/size");
const building_1 = require("../building");
const resource_1 = require("../resource");
const unit_1 = require("../unit");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const provinceConfig_1 = require("./provinceConfig");
let CityConfig = class CityConfig {
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
], CityConfig.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CityConfig.prototype, "initialStability", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => size_1.Size),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", size_1.Size)
], CityConfig.prototype, "initialSize", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => building_1.Building),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], CityConfig.prototype, "initialBuildings", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => resource_1.Resource),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], CityConfig.prototype, "initialResources", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => unit_1.Unit),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], CityConfig.prototype, "initialUnits", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => provinceConfig_1.ProvinceConfig, (provinceConfig) => provinceConfig.cityConfig),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", provinceConfig_1.ProvinceConfig)
], CityConfig.prototype, "provinceConfig", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], CityConfig.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], CityConfig.prototype, "updatedAt", void 0);
CityConfig = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], CityConfig);
exports.CityConfig = CityConfig;
//# sourceMappingURL=cityConfig.js.map