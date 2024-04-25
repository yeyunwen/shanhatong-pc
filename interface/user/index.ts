import type { UserForm, UserInfo, LoginResult } from "./type";

export const loginApi = (body: UserForm): DataPromise<LoginResult> => {
  return useFetchData("/user/login", { method: "POST", body });
};

export const getUserInfoApi = (): DataPromise<UserInfo> => {
  return useFetchData("/user/user-info", { method: "GET" });
};
