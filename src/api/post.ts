import type { CreatePostPayload, CreatePostResponse } from "../types/post";
import api from "./api";

export const createPost = async (
  payload: CreatePostPayload
): Promise<CreatePostResponse> => {
  const response = await api.post<CreatePostResponse>("/Post/create", payload);
  return response.data;
};
