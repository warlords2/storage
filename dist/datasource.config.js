"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var HOST = "localhost";
var PORT = Number("5432");
var USERNAME = "root";
var PASSWORD = "123456";
var DATABASE = "warlords";
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: HOST,
    port: PORT,
    username: USERNAME,
    password: PASSWORD,
    database: DATABASE,
    entities: ['src/entities/**/**/*.ts'],
    migrations: ['src/migrations/**/**/*.ts'],
});
