import express, { Response, Request } from "express";
import { validateCityId } from "../middleware/validateCityId";
const cityRouter = express.Router();
import cityDB from "../db.json";
import { CityRequest, ICity } from "../types/city";

cityRouter.get("/:id", validateCityId, (req: CityRequest, res: Response) => {
  return res.json(req.city);
});

cityRouter.delete("/:id", validateCityId, (req: CityRequest, res) => {
  cityDB.filter((city) => city.id !== req.city?.id);
  return res.sendStatus(204);
});

cityRouter.patch("/:id", validateCityId, (req: CityRequest, res) => {
  for (let city of cityDB) {
    if (city.id === req.city?.id) {
      city = req.body;
      return res.status(200).json(city);
    }
  }
});

cityRouter.post("/", (req: Request, res: Response) => {
  const city = req.body as Omit<ICity, "id">;
  console.log({ city });
  cityDB.push({ ...city, id: "1234-5678-9012-3456" });
  return res.status(201).json(city);
});

export { cityRouter };
