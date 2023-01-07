import "./Post.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import {
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
  TextsmsOutlined,
} from "@mui/icons-material";
import Comments from "../comments/Comments";
import moment from "moment";
import { IPost } from "../../types/Post.type";
import { axiosWithCookie } from "../../helpers/customAxios";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../context/AuthContext";

interface PostProps {
  post: IPost;
}
const Post = ({ post }: PostProps) => {
  const [commentOpen, setCommentOpen] = useState(false);
   const { currentUser } = useContext(AuthContext);

  const { error, data } = useQuery(["likes",post.id], () =>
    axiosWithCookie.get(`/likes?postId=${post.id}`).then((r) => r.data),
  );

  let liked = false;

  if (error) return <h2>Something went wrong</h2>;
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic || "src/assets/2.png"} alt="profilePic" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.description}</p>
          <img src={"/upload/" + post?.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {data && data.includes(currentUser?.id) 
            ? <FavoriteOutlined style={{ color: "red" }} /> 
            : <FavoriteBorderOutlined />}
            {data && data.length} Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlined />
            12 Comments
          </div>
          <div className="item">
            <ShareOutlined />
            Share
          </div>
        </div>
        {commentOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
};
export default Post;
