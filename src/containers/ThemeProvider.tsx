// The repository lost code of previous branch so addig this change to reopen this branch againa nd force push.

import React, { useState } from "react";
import { isDarkMode } from "../utils/DarkMode";

export const ThemeContext = React.createContext({
  value: isDarkMode,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: any) => {
  const [dark, setDark] = useState<boolean>(isDarkMode);
  const toggleTheme = (): void => setDark(!dark);
  return (
    <ThemeContext.Provider value={{ value: dark, toggleTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
