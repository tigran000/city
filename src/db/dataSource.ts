import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { City } from "./entity/City";
import { Celebrity } from "./entity/Celebrity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  synchronize: true,
  logging: true,
  entities: [City, Celebrity],
  subscribers: [],
});

async function initializeDataSource() {
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized!");
  } catch (err) {
    console.error("Error during Data Source initialization:", err);
  }
}

initializeDataSource();
