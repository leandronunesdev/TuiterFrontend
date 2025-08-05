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

export type Post = {
  id: string;
  userId: string;
  content: string;
  createdAt: string;
  likesCount: number;
  isDeleted: boolean;
};
