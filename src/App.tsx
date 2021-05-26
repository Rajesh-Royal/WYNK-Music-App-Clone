import React from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import HeaderSeoTagsAndMeta from "./components/Seo/HeaderSeoTagsAndMeta";
import ThemeProvider from "./containers/ThemeProvider";

// slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer/Footer";

const App = (props: any) => {
  return (
    <ThemeProvider>
      <main>
        <HeaderSeoTagsAndMeta {...props} />
        <Header />
        <Banner />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default App;
