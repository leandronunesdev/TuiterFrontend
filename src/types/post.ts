export type CreatePostPayload = {
  userId: string;
  content: string;
};

export type CreatePostResponse = {
  id: string;
  userId: string;
  content: string;
  createdAt: string;
};
