import {
  DarkModeOutlined,
  EmailOutlined,
  GridViewOutlined,
  HomeOutlined,
  NotificationsOutlined,
  PersonOutlined,
  SearchOutlined,
  WbSunnyOutlined,
} from "@mui/icons-material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import "./Navbar.scss";

const Navbar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>lamasocial</span>
        </Link>
        <HomeOutlined />
        {theme === "light" ? (
          <DarkModeOutlined onClick={toggleTheme} />
        ) : (
          <WbSunnyOutlined onClick={toggleTheme} />
        )}

        <GridViewOutlined />
        <div className="search">
          <SearchOutlined />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlined />
        <EmailOutlined />
        <NotificationsOutlined />
        <div className="user">
          <img src={currentUser?.avatar || "src/assets/2.png"} alt="" />
          <span>{currentUser?.name}</span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
