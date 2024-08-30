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
exports.WorldConfig = void 0;
const class_validator_1 = require("class-validator");
const buildingConfig_1 = require("./buildingConfig");
const marketConfig_1 = require("./marketConfig");
const npcConfig_1 = require("./npcConfig");
const playerConfig_1 = require("./playerConfig");
const provinceConfig_1 = require("./provinceConfig");
const resourceConfig_1 = require("./resourceConfig");
const unitConfig_1 = require("./unitConfig");
const typeorm_1 = require("typeorm");
const world_1 = require("../world");
let WorldConfig = class WorldConfig {
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
], WorldConfig.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WorldConfig.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], WorldConfig.prototype, "hasLimitUser", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WorldConfig.prototype, "limitUser", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WorldConfig.prototype, "hasMaxTimeInHours", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WorldConfig.prototype, "maxTimeInHours", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], WorldConfig.prototype, "hasCityForVitory", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WorldConfig.prototype, "cityForVitory", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => marketConfig_1.MarketConfig, (marketConfig) => marketConfig.worldConfig),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", marketConfig_1.MarketConfig)
], WorldConfig.prototype, "marketConfig", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => resourceConfig_1.ResourceConfig, (resourceConfig) => resourceConfig.worldConfig),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", resourceConfig_1.ResourceConfig)
], WorldConfig.prototype, "resourceConfig", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => unitConfig_1.UnitConfig, (unitConfig) => unitConfig.worldConfig),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", unitConfig_1.UnitConfig)
], WorldConfig.prototype, "unitConfig", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => buildingConfig_1.BuildingConfig, (buildingConfig) => buildingConfig.worldConfig),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", buildingConfig_1.BuildingConfig)
], WorldConfig.prototype, "buildingConfig", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => provinceConfig_1.ProvinceConfig, (provinceConfig) => provinceConfig.worldConfig),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", provinceConfig_1.ProvinceConfig)
], WorldConfig.prototype, "provinceConfig", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => npcConfig_1.NPCConfig, (npcConfig) => npcConfig.worldConfig),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", npcConfig_1.NPCConfig)
], WorldConfig.prototype, "npcConfig", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => playerConfig_1.PlayerConfig, (playerConfig) => playerConfig.worldConfig),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", playerConfig_1.PlayerConfig)
], WorldConfig.prototype, "playerConfig", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => world_1.World, (world) => world.worldConfig),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", world_1.World)
], WorldConfig.prototype, "world", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], WorldConfig.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], WorldConfig.prototype, "updatedAt", void 0);
WorldConfig = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], WorldConfig);
exports.WorldConfig = WorldConfig;
//# sourceMappingURL=worldConfig.js.map