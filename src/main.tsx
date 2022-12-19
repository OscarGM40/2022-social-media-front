import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import MainRoutes from "./router/MainRoutes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MainRoutes />
  </React.StrictMode>,
);
