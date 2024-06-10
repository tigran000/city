import cityDB from "../db.json";
import { Request, Response, NextFunction } from "express";
import { CityRequest } from "../types/city";

export const validateCityId = (
  req: CityRequest,
  res: Response,
  next: NextFunction
) => {
  const cityId = req.params.id;
  const city = cityDB.find((c) => c.id === cityId);

  if (!city) {
    return res.status(404).json({ error: "city not found" });
  }

  req.city = city;
  next();
};
