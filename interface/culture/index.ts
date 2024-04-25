import type { Culture } from "./type";

export const getCultureListApi = (): DataPromise<{ list: Culture[] }> => {
  return useFetchData("/culture/list", { method: "GET" });
};

export const getCultureDetailApi = (id: number): DataPromise<Culture> => {
  return useFetchData(`/culture/detail/${id}`, { method: "GET" });
};
