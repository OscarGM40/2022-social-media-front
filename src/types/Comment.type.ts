export interface IComment {
  id: number;
  userId: number;
  postId: number;
  description: string;
  name: string;
  profilePic?: string;
  img?: string;
  createdAt: string;
}
