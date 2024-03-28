import type { Travel } from "./type";

export const getTravelListApi = (): DataPromise<{ list: Travel[] }> => {
  return useFetchData("/tourism/list", { method: "GET" });
};

export const getTravelDetailApi = (tourismId: number): DataPromise<Travel> => {
  return useFetchData(`/tourism/detail/${tourismId}`, {
    method: "GET",
  });
};
