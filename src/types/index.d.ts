import { Celebrity } from "../db/entity/Celebrity";
import { City } from "../db/entity/City";

declare global {
  namespace Express {
    interface Request {
      city: City;
      celebrity: Celebrity;
    }
  }
}
