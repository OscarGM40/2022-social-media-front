import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import { MouseEvent, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { axiosWithCookie } from "../../helpers/customAxios";
import { IComment } from "../../types/Comment.type";
import "./Comments.scss";

interface CommentsProps {
  postId: number;
}
const Comments = ({ postId }: CommentsProps) => {
  const { currentUser } = useContext(AuthContext);
  const [desc, setDesc] = useState("");

  const { isLoading, error, data } = useQuery(["comments"], () =>
    axiosWithCookie.get(`/comments?postId=${postId}`).then((r) => r.data),
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    // primer arg es el fetcher: (arg) => {return axios.post('')}
    (newComment) => axiosWithCookie.post("/comments", newComment),
    // segundo arg es el refetch de la cache que corresponda
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["comments"]);
      },
    },
  );
  const handleClick = (evt: MouseEvent) => {
    if (!desc) return;
    evt.preventDefault();
    // @ts-ignore fijate que necesito mandar el postId por el body
    mutation.mutate({ desc, postId: postId });
    setDesc("");
  };

  if (error) return <h2>Something went wrong</h2>;

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser?.profilePic || "src/assets/2.png"} alt="avatar" />
        <input
          type="text"
          placeholder="Write a comment"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {isLoading
        ? "loading"
        : data.map((comment: IComment) => (
            <div className="comment" key={comment.id}>
              <img src={comment?.profilePic || "src/assets/2.png"} alt="commentImg" />
              <div className="info">
                <span>{comment.name}</span>
                <p>{comment.description}</p>
              </div>
              <span className="date">{moment(comment.createdAt).fromNow()}</span>
            </div>
          ))}
    </div>
  );
};
export default Comments;
