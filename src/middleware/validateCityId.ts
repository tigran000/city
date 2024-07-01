import { AppDataSource } from "../db/dataSource";
import { Response, Request, NextFunction } from "express";
import { City } from "../db/entity/City";

export const validateCityId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cityId = +req.params.id;

  if (!cityId) {
    return res.status(400).json({ error: "city id is required" });
  }

  const city = await AppDataSource.getRepository(City).findOne({
    relations: {
      celebrity: true,
    },
    where: {
      id: cityId,
    },
  });
  if (!city) {
    return res.status(404).json({ error: "city not found" });
  }
  req.city = city;
  next();
};
