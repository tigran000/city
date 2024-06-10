import { Request } from "express";

export interface ICity {
  id: string;
  name: string;
  country: string;
  population: number;
}

export interface CityRequest extends Request {
  city?: ICity;
}
