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
exports.Province = void 0;
const typeorm_1 = require("typeorm");
const city_1 = require("./city");
const position_1 = require("./geometry/position");
const world_1 = require("./world");
const size_1 = require("./geometry/size");
let Province = class Province {
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
], Province.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Province.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => position_1.Position),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", position_1.Position)
], Province.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => world_1.World, (world) => world.provinces),
    __metadata("design:type", world_1.World)
], Province.prototype, "world", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => size_1.Size),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", size_1.Size)
], Province.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => city_1.City, (city) => city.province),
    __metadata("design:type", Array)
], Province.prototype, "cities", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Province.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Province.prototype, "updatedAt", void 0);
Province = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], Province);
exports.Province = Province;
//# sourceMappingURL=province.js.map