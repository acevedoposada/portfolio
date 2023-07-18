import { createContext, useEffect, useState } from "react";

import type { FuncComponent } from "~/models/common.types";

export interface ThemeContextValue {
  isDark: boolean;
  toggleTheme: () => void;
}

const LOCAL_STORAGE_KEY = "isDark";

export const ThemeContext = createContext<ThemeContextValue>({
  isDark: false,
  toggleTheme() {},
});

export const ThemeProvider: FuncComponent = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const newState = !isDark;
    setIsDark(newState);
    localStorage.setItem(LOCAL_STORAGE_KEY, newState ? "true" : "false");
  };

  useEffect(() => {
    const isDark = localStorage.getItem("isDark") === "true";
    if (isDark) {
      setIsDark(isDark);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
