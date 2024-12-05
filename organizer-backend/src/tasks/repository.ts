import { and, eq, like } from 'drizzle-orm';
import { db } from 'src/db';
import { tasksTable } from 'src/db/schema';
import { CreateTaskResponseT, CreateTaskT, TaskT, UpdateTaskT } from './types';

export const getTasksRepository = async (query?: string): Promise<TaskT[]> => {
    const conditions = [];
    
    if (query) {
        conditions.push(like(tasksTable.title, `%${query}%`));
    }

    return await db
        .select()
        .from(tasksTable)
        .where(and(...conditions))
        .orderBy(tasksTable.created_at)
        .execute();
};

export const createTaskRepository = async (title: string, description: string): Promise<CreateTaskResponseT> => {
    const newTask: CreateTaskT = {
        title,
        description,
        completed: false,
        completed_at: null
    };

    
    const result = await db
        .insert(tasksTable)
        .values(newTask)
        .$returningId();

    return result[0];
};

export const updateTaskRepository = async (id: number, updates: UpdateTaskT): Promise<void> => {
	await db
		.update(tasksTable)
		.set(updates)
		.where(eq(tasksTable.id, id))
};

export const deleteTaskRepository = async (id: number): Promise<void> => {
    await db
        .delete(tasksTable)
        .where(eq(tasksTable.id, id));
};