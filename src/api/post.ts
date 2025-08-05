import type {
  CreatePostPayload,
  CreatePostResponse,
  Post,
} from "../types/post";
import api from "./api";

export const createPost = async (
  payload: CreatePostPayload
): Promise<CreatePostResponse> => {
  const response = await api.post<CreatePostResponse>("/Post/create", payload);
  return response.data;
};

export const getPostsByUserId = async (userId: string): Promise<Post[]> => {
  const response = await api.get<Post[]>(`/Post/user/${userId}`);
  return response.data;
};
