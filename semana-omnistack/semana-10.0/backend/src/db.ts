import {
    Sequelize
} from "sequelize-typescript";
import {
    DB_NAME,
    DB_USER,
    DB_PASS,
    DB_HOST,
} from "./config";

export const sequelize = new Sequelize({
    database: DB_NAME,
    username: DB_USER,
    password: DB_PASS,
    host: DB_HOST,
    models: [__dirname + '/models/'],
    logging: false,
    dialect: "postgres",
    define: {
        freezeTableName: false,
        createdAt: false,
        updatedAt: false,
        timestamps: false,
    }
});