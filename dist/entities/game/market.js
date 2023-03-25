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
exports.Market = void 0;
var typeorm_1 = require("typeorm");
var offer_1 = require("./market/offer");
var sale_1 = require("./market/sale");
var Market = exports.Market = /** @class */ (function () {
    function Market() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Market.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return offer_1.Offer; }, function (offer) { return offer.market; }),
        __metadata("design:type", Array)
    ], Market.prototype, "offers", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return sale_1.Sale; }, function (sale) { return sale.market; }),
        __metadata("design:type", Array)
    ], Market.prototype, "sales", void 0);
    Market = __decorate([
        (0, typeorm_1.Entity)()
    ], Market);
    return Market;
}());
