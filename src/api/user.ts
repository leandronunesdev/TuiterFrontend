import type {
  RegisterPayload,
  User,
  LoginPayload,
  LoginResponse,
} from "../types/user";
import api from "./api";

export const registerUser = async (payload: RegisterPayload): Promise<User> => {
  const response = await api.post<User>("/User/register", payload);
  return response.data;
};

export const loginUser = async (
  payload: LoginPayload
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/User/login", payload);
  return response.data;
};

export const meUser = async (): Promise<User> => {
  const response = await api.get<User>("/User/me");
  return response.data;
};
