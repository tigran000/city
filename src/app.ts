import express from "express";
import bodyParser from "body-parser";
import { cityRouter } from "./routes/city";
import { celebrityRouter } from "./routes/celebrity";
const app = express();

app.use(bodyParser.json());

app.use("/city", cityRouter);
app.use("/celebrity", celebrityRouter);

export { app };
