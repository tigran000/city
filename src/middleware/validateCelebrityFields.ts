import Joi from "joi";
import { Response, Request, NextFunction } from "express";
import { Celebrity } from "../db/entity/Celebrity";

const joi = Joi.object<Celebrity>({
  name: Joi.string().required(),
  occupation: Joi.string().required(),
});

export const validateCelebrityFields = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = joi.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0]?.message });

  next();
};
