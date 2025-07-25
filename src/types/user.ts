export type RegisterPayload = {
  username: string;
  email: string;
  password: string;
};

export type User = {
  id: string;
  username: string;
  email: string;
};

export type LoginPayload = {
  usernameOrEmail: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: User;
};
