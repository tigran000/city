import { AppDataSource } from "../db/dataSource";
import { Response, Request, NextFunction } from "express";
import { Celebrity } from "../db/entity/Celebrity";

export const validateCelebrityId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cityId = +req.params.id;

  if (!cityId) {
    return res.status(400).json({ error: "celebrity id is required" });
  }

  const celebrity = await AppDataSource.getRepository(Celebrity).findOneBy({
    id: cityId,
  });
  if (!celebrity) {
    return res.status(404).json({ error: "celebrity not found" });
  }
  req.celebrity = celebrity;
  next();
};
