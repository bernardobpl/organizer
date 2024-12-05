import "dotenv/config";
import express, { Express } from "express";
import cors from 'cors'
import { router } from "./routes";
import { requestLogger } from "./middleware/logger";

const port = process.env.PORT || 3000;

const app: Express = express();
app.use(cors())
app.use(express.json())
app.use(requestLogger)
app.use(router)

if(!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined')
}

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});