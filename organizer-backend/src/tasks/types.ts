import { InferModel } from 'drizzle-orm';
import { tasksTable } from 'src/db/schema';

export type TaskT = InferModel<typeof tasksTable>;
export type CreateTaskT = InferModel<typeof tasksTable, 'insert'>;

export type UpdateTaskT = Partial<Pick<TaskT, 'title' | 'description' | 'completed'>>;

export type CreateTaskResponseT = {
  id: number;
};