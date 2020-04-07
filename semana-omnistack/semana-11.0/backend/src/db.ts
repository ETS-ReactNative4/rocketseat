import { Sequelize } from 'sequelize-typescript';
import {DB_NAME, DB_HOST, DB_USER, DB_PASS} from "./config";


export const sequelize = new Sequelize({
    database: DB_NAME,
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASS,
    dialect: "postgres",
    models: [__dirname + '/models/'],
    logging: false,
    define: {
        freezeTableName: false,
        createdAt: false,
        updatedAt: false,
        timestamps: false,
        schema: 'omnistack'
    }
});