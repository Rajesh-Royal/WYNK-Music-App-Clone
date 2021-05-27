import React from "react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { banners } from "../../data/banners";
import { fallbackImage } from "../../data/fallbackImage";

// interface slideType {
//   bannerData: {
//     image: string;
//     title: string;
//   };
// }

const Banner = () => {
  const sliderSettings = {
    infinite: true,
    centerMode: true,
    centerPadding: "300px",
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    nextArrow: (
      <div>
        <button className="bg-white dark:bg-black opacity-50 w-10 h-10 rounded-full flex justify-center items-center focus:outline-none">
          <ChevronRightIcon className="text-black h-5 w-5 dark:text-white" />
        </button>
      </div>
    ),
    prevArrow: (
      <div>
        <button className="bg-white dark:bg-black opacity-50 w-10 h-10 rounded-full flex justify-center items-center focus:outline-none">
          <ChevronLeftIcon className="text-black h-5 w-5 dark:text-white" />
        </button>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "15px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <div className="home-hero-slider-container my-0 md:my-8">
        {/* @ts-ignore */}
        <Slider {...sliderSettings}>
          {banners.map((item) => {
            return (
              <img
                src={item.image || fallbackImage}
                alt={item.title}
                key={item.title}
                className={`w-00 rounded-xl slider-image ${
                  !item.image ? "animate-pulse dark:bg-gray-850 bg-white shadow-lg " : null
                }`}
              />
            );
          })}
        </Slider>
      </div>
    </React.Fragment>
  );
};

export default Banner;
