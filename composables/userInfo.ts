interface UserInfo {
  username: string;
  id: number;
}

export function useUserInfo() {
  const user = useLocalStorage<UserInfo>("user", { username: "", id: 0 });
  const isLogin = computed(() => !!user.value.username);

  const setUserInfo = (userInfo: UserInfo) => {
    user.value = userInfo;
  };

  const logout = () => {
    user.value = {
      username: "",
      id: 0,
    };
  };

  return {
    user,
    isLogin,
    setUserInfo,
    logout,
  };
}
