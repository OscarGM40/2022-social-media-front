import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/AuthProvider";
import { ThemeProvider } from "./context/ThemeProvider";
import "./main.css";
import MainRoutes from "./router/MainRoutes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <MainRoutes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
