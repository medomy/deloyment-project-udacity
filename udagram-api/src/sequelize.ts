import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize(
  "postgres://postgres:postgres@database-1.cioukp0eaavr.us-east-2.rds.amazonaws.com:5432/udagram"
  /*{username: config.username,
  password: config.password,
  database: config.database,
  host:config.host,
  port: 5432,
  dialect: "postgres",
  storage: ":memory:",}*/
);
