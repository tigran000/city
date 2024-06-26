import Joi from "joi";
import { Response, Request, NextFunction } from "express";
import { City } from "../db/entity/City";

const joi = Joi.object<City>({
  name: Joi.string().required(),
  country: Joi.string().required(),
  population: Joi.number().required(),
  celebrity: Joi.number().required(),
});

export const validateCityFields = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = joi.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0]?.message });

  next();
};
