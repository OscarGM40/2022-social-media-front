import { useQuery } from "@tanstack/react-query";
import { axiosWithCookie } from "../../helpers/customAxios";
import { IPost } from "../../types/Post.type";
import Post from "../post/Post";
import "./Posts.scss";

interface PostsProps {
  userId?: number;
}
const Posts = ({ userId }: PostsProps) => {
  
  const { isLoading, error, data } = useQuery(["posts"], () =>
    axiosWithCookie.get("/posts?userId=" + userId).then((r) => r.data),
  );

  if (error) return <h2>Something went wrong</h2>;
  return (
    <div className="posts">
      {isLoading ? "loading" : data.map((post: IPost) => <Post post={post} key={post.id} />)}
    </div>
  );
};
export default Posts;
