import { useQuery } from "@tanstack/react-query";
import { axiosWithCookie } from "../../helpers/customAxios";
import { IPost } from "../../types/Post.type";
import Post from "../post/Post";
import "./Posts.scss";

const Posts = () => {
  // TODO sacar a un custom hook y separar react-query de axios(adapter pattern)
  const { isLoading, error, data } = useQuery(["posts"], () =>
    axiosWithCookie.get("/posts").then((r) => r.data),
  );

  if (error) return <h2>Something went wrong</h2>;
  return (
    <div className="posts">
      {isLoading ? "loading" : data.map((post: IPost) => <Post post={post} key={post.id} />)}
    </div>
  );
};
export default Posts;
