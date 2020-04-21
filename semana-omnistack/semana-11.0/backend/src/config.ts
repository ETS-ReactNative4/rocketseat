require('dotenv').config();

export const DB_HOST = process.env.DB_HOST || "127.0.0.1";
export const DB_NAME = process.env.DB_NAME || "microservices";
export const DB_USER = process.env.DB_USER || "omnistack_user";
export const DB_PASS = process.env.DB_PASS || "OmnistackUser!";
export const DB_SCHEMA = process.env.DB_SCHEMA || "omnistack";