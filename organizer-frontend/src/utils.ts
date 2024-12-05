export const wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

export const filterExistingSearchParams = (searchParams: Record<string, unknown>) => {
  const filteredSearchParams: Record<string, unknown> = {};
  Object.entries(searchParams).forEach(([key, value]) => {
    if (value) {
      filteredSearchParams[key] = value;
    }
  });
  return filteredSearchParams;
};