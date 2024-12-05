import express from "express";
import { taskController } from "./tasks/controller";
import { API_ROUTES } from "./consts";

const router = express.Router();

router.use(API_ROUTES.TASKS, taskController);

export { router };
