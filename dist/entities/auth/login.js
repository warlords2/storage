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
exports.Login = void 0;
var typeorm_1 = require("typeorm");
var user_1 = require("../user");
var type_login_1 = require("./type_login");
var Login = exports.Login = /** @class */ (function () {
    function Login() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Login.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Login.prototype, "username", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Login.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Login.prototype, "nonce", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "enum",
            enum: type_login_1.TypeLogin,
            default: type_login_1.TypeLogin.MAIL
        }),
        __metadata("design:type", String)
    ], Login.prototype, "type", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return user_1.User; }, function (user) { return user.logins; }),
        __metadata("design:type", user_1.User)
    ], Login.prototype, "user", void 0);
    Login = __decorate([
        (0, typeorm_1.Entity)()
    ], Login);
    return Login;
}());
