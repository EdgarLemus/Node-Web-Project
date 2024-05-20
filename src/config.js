import { config } from "dotenv";
config();

export const database = {
  connectionLimit: 10,
  host: process.env.DATABASE_HOST || "roundhouse.proxy.rlwy.net",
  user: process.env.DATABASE_USER || "root",
  password: process.env.DATABASE_PASSWORD || "JXbdvsKgAFGOMHeURpbVENHXGBWnOdGL",
  database: process.env.DATABASE_NAME || "railway",
  port: process.env.DATABASE_PORT || 30251,
};

export const port = process.env.PORT || 4000;

export const SECRET = process.env.SECRET || 'some secret key';