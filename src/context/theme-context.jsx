import React, { createContext, useContext, useState } from "react";
import { Themes } from "../consts/styles.enum";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(Themes.Blueprint);

  const changeTheme = (theme) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      <div className={`h-[94%] ${currentTheme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
