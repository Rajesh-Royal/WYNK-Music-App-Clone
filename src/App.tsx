import React from "react";
import Header from "./components/Header/Header";
import HeaderSeoTagsAndMeta from "./components/Seo/HeaderSeoTagsAndMeta";
import ThemeProvider from "./containers/ThemeProvider";
import { banners } from "./data/banners";

const App = (props: any) => {
  return (
    <ThemeProvider>
      <main>
        <HeaderSeoTagsAndMeta {...props} />
        <Header />
      </main>
    </ThemeProvider>
  );
};

export default App;
