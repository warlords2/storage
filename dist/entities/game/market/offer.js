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
exports.Offer = void 0;
var typeorm_1 = require("typeorm");
var market_1 = require("../market");
var Offer = exports.Offer = /** @class */ (function () {
    function Offer() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Offer.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return market_1.Market; }, function (market) { return market.offers; }),
        __metadata("design:type", market_1.Market)
    ], Offer.prototype, "market", void 0);
    Offer = __decorate([
        (0, typeorm_1.Entity)()
    ], Offer);
    return Offer;
}());
