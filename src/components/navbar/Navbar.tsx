import { DarkModeOutlined, EmailOutlined, GridViewOutlined, HomeOutlined, NotificationsOutlined, PersonOutlined, SearchOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>lamasocial</span>
        </Link>
          <HomeOutlined />
          <DarkModeOutlined />
          <GridViewOutlined />
          <div className="search">
            <SearchOutlined />
            <input type="text"  placeholder="Search..."/>
          </div>
      </div>
      <div className="right">
        <PersonOutlined />
        <EmailOutlined />
        <NotificationsOutlined />
        <div className="user">
          <img src="src/assets/new-social-login.jpeg" alt="" />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
