import { Router } from "express";

import { validateCityId } from "../middleware/validateCityId";
import { AppDataSource } from "../db/dataSource";
import { validateCityFields } from "../middleware/validateCityFields";
import { City } from "../db/entity/City";

const cityRouter = Router();
const cityRepository = AppDataSource.getRepository(City);

cityRouter.get("/:id", validateCityId, (req, res) => {
  return res.status(200).json(req.city);
});

cityRouter.delete("/:id", validateCityId, async (req, res) => {
  await cityRepository.remove(req.city);
  return res.sendStatus(204);
});

cityRouter.put("/:id", validateCityId, validateCityFields, async (req, res) => {
  cityRepository.merge(req.city, req.body);
  const updatedCity = await cityRepository.save(req.city);
  return res.status(200).json(updatedCity);
});

cityRouter.post("/", validateCityFields, async (req, res) => {
  const city = cityRepository.create(req.body);
  const savedCity = await cityRepository.save(city);

  res.status(201).json(savedCity);
});

export { cityRouter };
