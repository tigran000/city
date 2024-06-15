import Joi from "joi";
import { Response, Request, NextFunction } from "express";

export const validateCityFields = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = Joi.object({ name: Joi.string().required() }).validate(
    req.body
  );

  if (error) return res.status(422).json({ error: error.details[0].message });

  next();
};
