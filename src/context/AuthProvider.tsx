import { FC, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export type User = {
  id: number;
  name: string;
  avatar: string;
};
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

  const login = () => {
    setCurrentUser((p) => ({
      ...p,
      id: 1,
      name: "pepe",
      avatar: "src/assets/1.png",
    }));
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
