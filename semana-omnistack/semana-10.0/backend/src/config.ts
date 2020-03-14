require("dotenv").config();

export const PORT = process.env.PORT || "3333";
export const HOST = process.env.HOST || "http://12.0.0.1";
export const DB_NAME = process.env.DB_NAME || "omnistack";
export const DB_USER = process.env.DB_USER || "omnistack_user";
export const DB_PASS = process.env.DB_PASS || "OmnistackUser!";
export const DB_HOST = process.env.DB_HOST || "127.0.0.1";