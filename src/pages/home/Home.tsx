import Posts from "../../components/posts/Posts";
import Share from "../../components/share/Share";
import Stories from "../../components/stories/Stories";
import "./Home.scss";

const Home = () => {
  return <div className="home">
    <Stories />
    <Share />
    <Posts />
  </div>;
};
export default Home;
