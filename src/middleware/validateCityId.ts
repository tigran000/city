import { pool } from "../db/app";
import { Response, NextFunction } from "express";
import { CityRequest, ICity } from "../types/city";
import { RowDataPacket } from "mysql2";

export const validateCityId = async (
  req: CityRequest,
  res: Response,
  next: NextFunction
) => {
  const cityId = req.params.id;
  const query = `SELECT * FROM cities where id = '${cityId}'`;
  const [result] = await pool.query<ICity & RowDataPacket[]>(query);
  if (!result.length) {
    return res.status(404).json({ error: "city not found" });
  }
  req.city = result;
  next();
};
