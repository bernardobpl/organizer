import { useQueryClient } from "@tanstack/react-query";
import { QueryKeyValues } from "../consts";
import { useSearch } from "@tanstack/react-router";
import { filterExistingSearchParams } from "../utils";

export const useOptmisticUpdate = () => {
  const queryClient = useQueryClient();
  const searchParams = useSearch({ strict: false });
  const filteredSearchParams = filterExistingSearchParams(searchParams);

  const optimisticUpdate = async <T>(baseQueryKey: QueryKeyValues, updateCallback: (previousValue: T) => T) => {
    const queryKey = [...baseQueryKey, filteredSearchParams];
    await queryClient.cancelQueries({ queryKey });
    const previousValue = queryClient.getQueryData(queryKey);
    queryClient.setQueryData(queryKey, updateCallback);
    return { previousValue };
  };

  return optimisticUpdate;
}