import { Router, Request, Response } from "express";
import * as taskService from "./service";

export const taskController = Router();

taskController.get('/', async (req: Request, res: Response) => {
  const { query } = req.query;
  const { status, message, data } = await taskService.getTasks(query as string);
  res.status(status).json({ message, data });
});

taskController.post('/', async (req: Request, res: Response) => {
  const { title, description='' } = req.body;
  const { status, message, data } = await taskService.createTask(title, description);
  res.status(status).json({ message, data });
});

taskController.put('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const updates = req.body;
  const { status, message, data } = await taskService.updateTask(id, updates);
  res.status(status).json({ message, data });
});

taskController.delete('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { status, message, data } = await taskService.deleteTask(id);
  res.status(status).json({ message, data });
});