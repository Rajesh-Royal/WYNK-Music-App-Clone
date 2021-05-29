import React from "react";
import BannerSlider from "../components/Banner/BannerSlider";
import SongSlider from "../components/Banner/SongSlider";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeaderSeoTagsAndMeta from "../components/Seo/HeaderSeoTagsAndMeta";
import "../assets/css/carousel.css";
import { TopCharts } from "../data/topCharts";
import { Podcasts } from "../data/podcasts";
import { IndieSongs } from "../data/indieSongs";
import { InternationalHits } from "../data/internationalHits";
import { HindiHits } from "../data/hindiHits";
import YourLibrary from "../components/YourLibrary/YourLibrary";

const Home = <T extends object>(props: T): JSX.Element => {
  return (
    <React.Fragment>
      <main>
        <HeaderSeoTagsAndMeta {...props} />
        <Header />
        <BannerSlider />

        {/* top charts */}
        <SongSlider songData={TopCharts} title="Top Charts" />
        {/* Podcast */}
        <SongSlider songData={Podcasts} title="Top Podcasts On Wynk" />
        {/* indie music */}
        <SongSlider songData={IndieSongs} title="Indie Music" />
        {/* International hits */}
        <SongSlider songData={InternationalHits} title="International Top Hits" slideToShow={7} />
        {/* Hindi Top 50 */}
        <SongSlider songData={HindiHits} title="Hindi Top 50" slideToShow={7} />
        <YourLibrary />
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default Home;
