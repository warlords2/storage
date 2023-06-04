import { DataSource } from 'typeorm';



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

export const AppDataSource = new DataSource({
    type: "postgres",
    host: HOST,
    port: PORT,
    username: USERNAME,
    password: PASSWORD,
    database: DATABASE,
    entities: ['src/entities/**(.ts|.js)','src/entities/*/**(.ts|.js)', 'src/entities/*/*/**(.ts|.js)'],
    migrations: ['src/migrations/**(.ts|.js)','src/migrations/*/**(.ts|.js)', 'src/migrations/*/*/**(.ts|.js)'],
    subscribers: ['src/subscribers/**(.ts|.js)','src/subscribers/*/**(.ts|.js)', 'src/subscribers/*/*/**(.ts|.js)']
});

