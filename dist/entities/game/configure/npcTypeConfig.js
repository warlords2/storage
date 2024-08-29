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
exports.NPCTypeConfig = void 0;
const common_1 = require("@warlords/common");
const cityConfig_1 = require("./cityConfig");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const npcConfig_1 = require("./npcConfig");
let NPCTypeConfig = class NPCTypeConfig {
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
], NPCTypeConfig.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NPCTypeConfig.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: common_1.NpcType,
        default: common_1.NpcType.Ai
    }),
    __metadata("design:type", String)
], NPCTypeConfig.prototype, "npcType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], NPCTypeConfig.prototype, "minPeerProvince", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], NPCTypeConfig.prototype, "maxPeerProvince", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], NPCTypeConfig.prototype, "aggressionLevel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], NPCTypeConfig.prototype, "interactionDistance", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], NPCTypeConfig.prototype, "useMarket", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => npcConfig_1.NPCConfig, (npcConfig) => npcConfig.npcTypes),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", npcConfig_1.NPCConfig)
], NPCTypeConfig.prototype, "npcConfig", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => cityConfig_1.CityConfig),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", cityConfig_1.CityConfig)
], NPCTypeConfig.prototype, "cityInitial", void 0);
NPCTypeConfig = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], NPCTypeConfig);
exports.NPCTypeConfig = NPCTypeConfig;
//# sourceMappingURL=npcTypeConfig.js.map