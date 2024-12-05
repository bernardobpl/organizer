import { createTaskRepository, getTasksRepository, updateTaskRepository, deleteTaskRepository } from './repository';
import { CreateTaskResponseT, TaskT, UpdateTaskT } from './types';

interface ServiceResponse<T> {
  status: number;
  message: string;
  data: T | null;
}

export const getTasks = async (query?: string): Promise<ServiceResponse<TaskT[]>> => {
  try {
    const tasks = await getTasksRepository(query);
    return {
      status: 200,
      message: "Success",
      data: tasks
    };
  } catch (error) {
    console.error('Error getting tasks:', error);
    return {
      status: 500,
      message: "Internal server error",
      data: []
    };
  }
};

export const createTask = async (title: string, description: string): Promise<ServiceResponse<CreateTaskResponseT>> => {
  try {
    if (!title) {
      return {
        status: 400,
        message: "Title and description are required",
        data: null
      };
    }

    const newTaskId = await createTaskRepository(title, description);
    return {
      status: 201,
      message: "Task created successfully",
      data: newTaskId
    };
  } catch (error) {
    console.error('Error creating task:', error);
    return {
      status: 500,
      message: "Internal server error",
      data: null
    };
  }
};

export const updateTask = async (id: number, updates: UpdateTaskT): Promise<ServiceResponse<{ id: number }>> => {
  try {
    if (!id) {
      return {
        status: 400,
        message: "Task ID is required",
        data: null
      };
    }

    const updatedFields = {
      ...updates,
      ...(updates?.completed ? { completed_at: new Date() } : {}),
    };

    await updateTaskRepository(id, updatedFields);
    return {
      status: 200,
      message: "Task updated successfully",
      data: { id }
    };
  } catch (error) {
    console.error('Error updating task:', error);
    return {
      status: 500,
      message: "Internal server error",
      data: null
    };
  }
};

export const deleteTask = async (id: number): Promise<ServiceResponse<{ id: number }>> => {
  try {
    if (!id) {
      return {
        status: 400,
        message: "Task ID is required",
        data: null
      };
    }

    await deleteTaskRepository(id);
    return {
      status: 200,
      message: "Task deleted successfully",
      data: { id }
    };
  } catch (error) {
    console.error('Error deleting task:', error);
    return {
      status: 500,
      message: "Internal server error",
      data: null
    };
  }
};