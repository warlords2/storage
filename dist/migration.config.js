"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let AppDataSource = require("./datasource.config");
const datasource = AppDataSource(); // config is one that is defined in datasource.config.ts file
datasource.initialize();
exports.default = datasource;
//# sourceMappingURL=migration.config.js.map