import React from "react";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeaderSeoTagsAndMeta from "../components/Seo/HeaderSeoTagsAndMeta";

const Home = <T extends object>(props: T): JSX.Element => {
  return (
    <React.Fragment>
      <main>
        <HeaderSeoTagsAndMeta {...props} />
        <Header />
        <Banner />
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default Home;
