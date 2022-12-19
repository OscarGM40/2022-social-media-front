import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import { ReactElement } from "react";

// podemos proteger una ruta asi:
const currentUser = true;
const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  // si si lo hay simplemente dejamos pasar  
  return children;
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout /> 
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
    ],
  },
]);



const MainRoutes = () => {
  console.log('Main routes created')
  return <RouterProvider router={router} />;
};
export default MainRoutes;
