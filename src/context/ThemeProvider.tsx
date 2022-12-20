import { FC, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

type ThemeTypes = "dark" | "light";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeTypes>(
    (localStorage.getItem("theme") as ThemeTypes) || "light",
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
