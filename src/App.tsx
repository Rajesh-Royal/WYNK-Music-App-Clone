import React, { useState} from "react";
import Header from "./components/Header/Header";
import HeaderSeoTagsAndMeta from "./components/Seo/HeaderSeoTagsAndMeta";

const App = (props: any) => {
  const [ dark, setDark ] = useState<boolean>(true);
  const toggleTheme = () => setDark(!dark);
  console.log(dark);
  return (
    <main>
      <HeaderSeoTagsAndMeta />
      <Header />
    </main>
  );
};

export default App;
