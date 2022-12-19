import { Outlet } from "react-router-dom";
import LeftBar from "../components/leftBar/LeftBar";
import Navbar from "../components/navbar/Navbar";
import RightBar from "../components/rightBar/RightBar";

const Layout = () => {
  return (
    <div>
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
