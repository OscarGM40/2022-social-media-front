import { createContext } from "react";
import { User } from "./AuthProvider";

interface AuthProps {
  currentUser: User | null;
  login: () => void;
}

export const AuthContext = createContext({} as AuthProps);
