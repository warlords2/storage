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
exports.ResourceConfig = void 0;
const resourceType_1 = require("../resourceType");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const worldConfig_1 = require("./worldConfig");
let ResourceConfig = class ResourceConfig {
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
], ResourceConfig.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ResourceConfig.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => resourceType_1.ResourceType, (resourcesType) => resourcesType.resourceConfig),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], ResourceConfig.prototype, "resourcesType", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => worldConfig_1.WorldConfig, (worldConfig) => worldConfig.resourceConfig),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", worldConfig_1.WorldConfig)
], ResourceConfig.prototype, "worldConfig", void 0);
ResourceConfig = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], ResourceConfig);
exports.ResourceConfig = ResourceConfig;
//# sourceMappingURL=resourceConfig.js.map