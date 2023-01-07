import { createContext } from "react";
import { User, UserLogin } from "../types/User.type";

interface AuthProps {
  currentUser: User | null;
  login: (inputs:UserLogin) => Promise<void>;
}

export const AuthContext = createContext({} as AuthProps);
