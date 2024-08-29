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
exports.ProvinceConfig = void 0;
const size_1 = require("../geometry/size");
const cityConfig_1 = require("./cityConfig");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const worldConfig_1 = require("./worldConfig");
let ProvinceConfig = class ProvinceConfig {
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
], ProvinceConfig.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProvinceConfig.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProvinceConfig.prototype, "limitCity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProvinceConfig.prototype, "totalNpcsPeerProvince", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], ProvinceConfig.prototype, "genereteProvince", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => size_1.Size),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", size_1.Size)
], ProvinceConfig.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => cityConfig_1.CityConfig, (cityConfig) => cityConfig.provinceConfig),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", cityConfig_1.CityConfig)
], ProvinceConfig.prototype, "cityConfig", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => worldConfig_1.WorldConfig, (worldConfig) => worldConfig.provinceConfig),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", worldConfig_1.WorldConfig)
], ProvinceConfig.prototype, "worldConfig", void 0);
ProvinceConfig = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], ProvinceConfig);
exports.ProvinceConfig = ProvinceConfig;
//# sourceMappingURL=provinceConfig.js.map