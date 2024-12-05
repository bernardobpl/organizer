import { API_ROUTES } from "../consts";
import { CreateTaskT, GetTasksApiResponse, PostTasksApiResponse, TaskApiT, TaskT } from "../types/task";
import { api } from "./api";

const formatTasks = (tasks: TaskApiT[]): TaskT[] => {
  return tasks.map((task) => ({
    id: task.id,
    title: task.title,
    description: task.description,
    completed: !!task.completed,
    completedAt: task.completed_at,
    createdAt: task.created_at,
    updatedAt: task.updated_at,
  }));
};

export const getTasks = async (query?: string) => {
  const { data } = await api.get<GetTasksApiResponse>(API_ROUTES.TASKS, {
    params: {
      query,
    },
  });
  return formatTasks(data.data);
};

export const createTask = async (newTask: CreateTaskT) => {
  const { data } = await api.post<PostTasksApiResponse>(API_ROUTES.TASKS, newTask);
  return formatTasks([data.data]);
};

export const updateTask = async (id: number, updates: Partial<TaskT>) => {
  const { data } = await api.put<{id: number}>(`${API_ROUTES.TASKS}/${id}`, updates);
  return data
};

export const deleteTask = async (id: number) => {
  const { data } = await api.delete<{id: number}>(`${API_ROUTES.TASKS}/${id}`);
  return data;
};