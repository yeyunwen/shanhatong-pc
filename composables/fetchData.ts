import type { UseFetchOptions } from "#app";

export interface ResponseData<T = any> {
  code: number;
  data: T;
  msg: string;
}
export type DataPromise<T = any> = Promise<ResponseData<T>>;

const baseUrl = "http://localhost:3100";

export const useFetchData = async (
  url: string,
  options: UseFetchOptions<any> = {}
) => {
  // const { data } = await useFetch<ResponseData>(`${baseUrl}${url}`, options);
  // console.log("data", data.value);

  // return data.value as ResponseData;
  const { auth } = useAuth();
  console.log("fetch", auth.value);

  const defaultOptions = {
    headers: {
      Authorization: auth.value.token || "",
    },
  };

  options = { ...defaultOptions, ...options };

  return new Promise<ResponseData>((resolve, reject) => {
    useFetch<ResponseData>(`${baseUrl}${url}`, options).then((res) => {
      const { data, error } = res;
      if (error.value) {
        console.error("❌ 请求错误", error.value);
        reject(error.value);
        return;
      }
      resolve(data.value as ResponseData);
    });
  });
};
