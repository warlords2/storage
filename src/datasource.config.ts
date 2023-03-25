import { DataSource } from 'typeorm';

const HOST = "localhost";
const PORT = Number("5432");
const USERNAME ="root";
const PASSWORD ="123456";
const DATABASE ="warlords";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: HOST,
    port: PORT,
    username: USERNAME,
    password: PASSWORD,
    database: DATABASE,
    entities: ['src/entities/**/**/*.ts'],
    migrations: ['src/migrations/**/**/*.ts'],
});

