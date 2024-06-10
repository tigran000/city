import express from "express";
import bodyParser from "body-parser";
import { cityRouter } from "./routes/city";
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/city", cityRouter);

app.listen(port, () => {
  console.log(`Exaple app listening on port ${port}`);
});