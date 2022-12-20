import { createContext } from "react";

interface ThemeProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeProps);
