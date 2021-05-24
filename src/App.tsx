import React from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import HeaderSeoTagsAndMeta from "./components/Seo/HeaderSeoTagsAndMeta";
import ThemeProvider from "./containers/ThemeProvider";

// slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = (props: any) => {
  return (
    <ThemeProvider>
      <main>
        <HeaderSeoTagsAndMeta {...props} />
        <Header />
        <Banner />
      </main>
    </ThemeProvider>
  );
};

export default App;
