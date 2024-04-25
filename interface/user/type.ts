export type UserForm = {
  contact: string;
  password: string;
};

export type UserInfo = {
  id: number;
  username: string;
  phone: string;
  email: string;
  password: string;
};

export type LoginResult = {
  accessToken: string;
  tokenType: string;
};
