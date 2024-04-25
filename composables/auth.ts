export interface Auth {
  token: string;
}

export const useAuth = () => {
  const auth = useLocalStorage<Auth>("auth", {
    token: "",
  });

  const setAuth = (authData: Auth) => {
    return new Promise<Auth>((resolve) => {
      auth.value = authData;
      resolve(authData);
    });
  };

  return {
    auth,
    setAuth,
  };
};
