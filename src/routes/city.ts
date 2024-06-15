import express, { Response, Request } from "express";
import { validateCityId } from "../middleware/validateCityId";
import { pool } from "../db/app";
import { CityRequest, ICity } from "../types/city";
import { validateCityFields } from "../middleware/validateCityFields";

const cityRouter = express.Router();

cityRouter.get("/:id", validateCityId, (req: CityRequest, res: Response) => {
  return res.status(200).json(req.city);
});

cityRouter.delete("/:id", validateCityId, (req: CityRequest, res) => {
  pool
    .execute("delete from cities where id = ?", [req.params.id])
    .then(() => res.sendStatus(204));
});

cityRouter.patch(
  "/:id",
  validateCityId,
  validateCityFields,
  (req: CityRequest, res) => {
    pool
      .execute("update cities set name=? where id=?", [
        req.body?.name,
        req.params.id,
      ])
      .then(() => res.sendStatus(204));
  }
);

cityRouter.post(
  "/",
  validateCityFields,
  async (req: Request, res: Response) => {
    const city = req.body as Omit<ICity, "id">;

    pool
      .execute("insert into cities (name) values (?)", [city.name])
      .then(() => res.sendStatus(201));
  }
);

export { cityRouter };
