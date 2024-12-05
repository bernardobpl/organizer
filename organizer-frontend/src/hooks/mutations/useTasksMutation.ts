import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useOptmisticUpdate } from "../useOptmisticUpdate";
import { useSnackbar } from "../useSnackbar";
import { QUERY_KEYS, SNACKBAR_SEVERITIES } from "../../consts";
import { createTask, updateTask, deleteTask } from "../../services/tasks";
import { CreateTaskT, TaskT } from "../../types/task";

export const useTasksMutation = () => {
  const queryClient = useQueryClient();
  const optimisticUpdate = useOptmisticUpdate();
  const { showSnackbar } = useSnackbar();

  const { mutate: createTaskMutation } = useMutation({
    onMutate: async (newTask: CreateTaskT) => {
      const temporaryTask = {
        id: Math.random(),
        title: newTask.title,
        completed: newTask.completed || false,
        description: newTask.description || "",
      } as TaskT;

      return optimisticUpdate<TaskT[]>(QUERY_KEYS.TASKS, (prev) => [...prev, temporaryTask]);
    },
    mutationFn: (newTask: CreateTaskT) => createTask(newTask),
    onSuccess: () => {
      showSnackbar('Task created successfully', SNACKBAR_SEVERITIES.SUCCESS);
    },
    onError: (error) => {
      showSnackbar('Failed to create task', SNACKBAR_SEVERITIES.ERROR);
      console.error('Error creating task:', error);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.TASKS });
    },
  })

  const { mutate: updateTaskMutation } = useMutation({
    onMutate: async ({ id, updates }: { id: number; updates: Partial<TaskT> }) => {
      const temporaryTask = {
        ...updates,
        id,
      };

      return optimisticUpdate<TaskT[]>(QUERY_KEYS.TASKS, (prev) => {
        return prev.map(task => task.id === id ? { ...task, ...temporaryTask } : task)
      });
    },
    mutationFn: ({ id, updates }: { id: number; updates: Partial<TaskT> }) => updateTask(id, updates),
    onSuccess: () => {
      showSnackbar('Task updated successfully', SNACKBAR_SEVERITIES.SUCCESS);
    },
    onError: (error) => {
      showSnackbar('Failed to update task', SNACKBAR_SEVERITIES.ERROR);
      console.error('Error updating task:', error);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.TASKS });
    },
  })

  const { mutate: deleteTaskMutation } = useMutation({
    onMutate: async (id: number) => {
      return optimisticUpdate<TaskT[]>(QUERY_KEYS.TASKS, (prev) => {
        return prev.filter(task => task.id !== id);
      });
    },
    mutationFn: (id: number) => deleteTask(id),
    onSuccess: () => {
      showSnackbar('Task deleted successfully', SNACKBAR_SEVERITIES.SUCCESS);
    },
    onError: (error) => {
      showSnackbar('Failed to delete task', SNACKBAR_SEVERITIES.ERROR);
      console.error('Error deleting task:', error);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.TASKS });
    },
  });

  return { createTaskMutation, updateTaskMutation, deleteTaskMutation }
};