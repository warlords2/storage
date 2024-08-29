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
exports.City = void 0;
const typeorm_1 = require("typeorm");
const building_1 = require("./building");
const position_1 = require("./geometry/position");
const npc_1 = require("./npc");
const province_1 = require("./province");
const resource_1 = require("./resource");
const size_1 = require("./geometry/size");
const world_1 = require("./world");
const unit_1 = require("./unit");
let City = class City {
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
], City.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], City.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], City.prototype, "stability", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => npc_1.Npc, (npc) => npc.cities),
    __metadata("design:type", Object)
], City.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => position_1.Position),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", position_1.Position)
], City.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => size_1.Size),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", size_1.Size)
], City.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => building_1.Building, (building) => building.city),
    __metadata("design:type", Array)
], City.prototype, "buildings", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => resource_1.Resource, (resource) => resource.city),
    __metadata("design:type", Array)
], City.prototype, "resources", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => unit_1.Unit, (unit) => unit.city),
    __metadata("design:type", Array)
], City.prototype, "units", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => world_1.World, (world) => world.cities),
    __metadata("design:type", world_1.World)
], City.prototype, "world", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => province_1.Province, (province) => province.cities),
    __metadata("design:type", province_1.Province)
], City.prototype, "province", void 0);
City = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], City);
exports.City = City;
//# sourceMappingURL=city.js.map