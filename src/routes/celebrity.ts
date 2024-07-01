import { Router } from "express";

import { validateCelebrityId } from "../middleware/validateCelebrityId";
import { AppDataSource } from "../db/dataSource";
import { validateCelebrityFields } from "../middleware/validateCelebrityFields";
import { Celebrity } from "../db/entity/Celebrity";

const celebrityRouter = Router();
const celebrityRepository = AppDataSource.getRepository(Celebrity);

celebrityRouter.get("/:id", validateCelebrityId, (req, res) => {
  return res.status(200).json(req.celebrity);
});

celebrityRouter.delete("/:id", validateCelebrityId, async (req, res) => {
  await celebrityRepository.remove(req.celebrity);
  return res.sendStatus(204);
});

celebrityRouter.put(
  "/:id",
  validateCelebrityId,
  validateCelebrityFields,
  async (req, res) => {
    celebrityRepository.merge(req.celebrity, req.body);
    const updatedCelebrity = await celebrityRepository.save(req.celebrity);
    return res.status(200).json(updatedCelebrity);
  }
);

celebrityRouter.post("/", validateCelebrityFields, async (req, res) => {
  const celebrity = celebrityRepository.create(req.body);
  const savedcelebrity = await celebrityRepository.save(celebrity);

  res.status(201).json(savedcelebrity);
});

export { celebrityRouter };
