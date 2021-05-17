import React, { useState } from "react";
import Header from "./components/Header/Header";
import HeaderSeoTagsAndMeta from "./components/Seo/HeaderSeoTagsAndMeta";
import { isDarkMode } from "./utils/DarkMode";

export const ThemeContext = React.createContext(isDarkMode);

const App = (props: any) => {
  const [dark, setDark] = useState<boolean>(isDarkMode);
  const toggleTheme = () => setDark(!dark);
  return (
    <ThemeContext.Provider value={dark}>
      <main>
        <HeaderSeoTagsAndMeta />
        <Header toggleTheme={toggleTheme} />
      </main>
    </ThemeContext.Provider>
  );
};

export default App;
