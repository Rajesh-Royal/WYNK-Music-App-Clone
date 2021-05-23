import React from "react";
import Carousel, {
  slidesToShowPlugin,
  autoplayPlugin,
  slidesToScrollPlugin,
} from "@brainhubeu/react-carousel";
import { banners } from "../../data/banners";
import { fallbackImage } from "../../data/fallbackImage";
import "../../assets/css/carousel.css";

// interface slideType {
//   bannerData: {
//     image: string;
//     title: string;
//   };
// }

const Banner = () => {
  const sliderSetting = [
    "infinite",
    "arrows",
    {
      resolve: slidesToShowPlugin,
      options: {
        numberOfSlides: 3,
      },
    },
    {
      resolve: slidesToScrollPlugin,
      options: {
        numberOfSlides: 2,
      },
    },
    {
      resolve: autoplayPlugin,
      options: {
        interval: 5000,
      },
    },
  ];
  return (
    <React.Fragment>
      <div className="home-hero-slider-container">
        <Carousel plugins={sliderSetting} animationSpeed={1000}>
          {banners.map((item) => {
            return (
              <img
                src={item.image || fallbackImage}
                alt={item.title}
                key={item.title}
                className="w-00 rounded-xl slider-image"
              />
            );
          })}
        </Carousel>
      </div>
    </React.Fragment>
  );
};

export default Banner;
