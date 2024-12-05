import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getTasks } from "../../services/tasks";
import { QUERY_KEYS } from "../../consts";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useTasks = ({taskIdModal, ...apiSearchParams}: { query?: string; taskIdModal?: number }) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.TASKS, apiSearchParams],
    queryFn: () => getTasks(apiSearchParams.query),
    placeholderData: keepPreviousData,
  });
};