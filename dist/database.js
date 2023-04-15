"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildDatabase = void 0;
const typeorm_1 = require("typeorm");
const HOST = process.env.HOST || "localhost";
const PORT = Number(process.env.PORT || "5432");
const USERNAME = process.env.USERNAME || "root";
const PASSWORD = process.env.PASSWORD || "123456";
const DATABASE = process.env.DATABASE || "warlords";
let _con = {
    type: "postgres",
    host: HOST,
    port: PORT,
    username: USERNAME,
    password: PASSWORD,
    database: DATABASE,
};
let buildDatabase = (con = _con) => __awaiter(void 0, void 0, void 0, function* () {
    let AppConnection = new typeorm_1.DataSource({
        type: "postgres",
        host: con.host,
        port: con.port,
        username: con.username,
        password: con.password,
        database: con.database,
        entities: ['src/entities/**(.ts|.js)', 'src/entities/*/**(.ts|.js)', 'src/entities/*/*/**(.ts|.js)'],
        migrations: ['src/migrations/**(.ts|.js)', 'src/migrations/*/**(.ts|.js)', 'src/migrations/*/*/**(.ts|.js)'],
        subscribers: ['src/subscribers/**(.ts|.js)', 'src/subscribers/*/**(.ts|.js)', 'src/subscribers/*/*/**(.ts|.js)']
    });
    return yield AppConnection.initialize();
});
exports.buildDatabase = buildDatabase;
//# sourceMappingURL=database.js.map