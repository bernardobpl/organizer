export type TaskT = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
};

export type TaskApiT = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  completed_at?: string;
  created_at: string;
  updated_at: string;
}

export type GetTasksApiResponse = {
  message: string;
  data: TaskApiT[];
}

export type CreateTaskT = {
  title: TaskT['title'];
  description?: TaskT['description'];
  completed?: TaskT['completed'];
}

export type UpdateTaskT = Partial<Pick<TaskT, 'title' | 'description' | 'completed'>>;

export type PostTasksApiResponse = {
  message: string;
  data: TaskApiT;
}