import "dotenv/config";
import { app } from "./app";

const port = process.env.APP_PORT || 3000;

async function initializeApp() {
  try {
    app.listen(port, () => {
      console.log(`City app listening on port ${port}`);
    });
  } catch (err) {
    console.error("Error during app initialization", err);
  }
}

initializeApp();
