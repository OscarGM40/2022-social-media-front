import { FC, useEffect, useState } from "react";
import { axiosWithoutCookie } from "../helpers/customAxios";
import { User, UserLogin } from "../types/User.type";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User>(
    JSON.parse(localStorage.getItem("user")!) || null,
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  const login = async (inputs: UserLogin): Promise<void> => {
    const { data } = await axiosWithoutCookie.post<User>("/auth/login", inputs);
    setCurrentUser(data);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
