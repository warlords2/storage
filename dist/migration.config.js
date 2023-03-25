"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppDataSource = require("./datasource.config");
var datasource = AppDataSource(); // config is one that is defined in datasource.config.ts file
datasource.initialize();
exports.default = datasource;
