import { useContext } from "react";
import { Outlet } from "react-router-dom";
import LeftBar from "../components/leftBar/LeftBar";
import Navbar from "../components/navbar/Navbar";
import RightBar from "../components/rightBar/RightBar";
import { ThemeContext } from "../context/ThemeContext";
import "./Layout.scss";

const Layout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`theme-${theme}`}>
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  );
};

export default Layout;
