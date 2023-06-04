"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const HOST = process.env.DATABASE_HOST || process.env.POSTGRES_HOST || "localhost";
const PORT = Number(process.env.POSTGRES_PORT || "5432");
const USERNAME = process.env.POSTGRES_USER || "root";
const PASSWORD = process.env.POSTGRES_PASSWORD || "123456";
const DATABASE = process.env.POSTGRES_DB || "warlords";
/*
const HOST = "localhost";
const PORT = Number("5432");
const USERNAME ="root";
const PASSWORD ="123456";
const DATABASE ="warlords";
*/
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: HOST,
    port: PORT,
    username: USERNAME,
    password: PASSWORD,
    database: DATABASE,
    entities: ['src/entities/**(.ts|.js)', 'src/entities/*/**(.ts|.js)', 'src/entities/*/*/**(.ts|.js)'],
    migrations: ['src/migrations/**(.ts|.js)', 'src/migrations/*/**(.ts|.js)', 'src/migrations/*/*/**(.ts|.js)'],
    subscribers: ['src/subscribers/**(.ts|.js)', 'src/subscribers/*/**(.ts|.js)', 'src/subscribers/*/*/**(.ts|.js)']
});
//# sourceMappingURL=datasource.config.js.map