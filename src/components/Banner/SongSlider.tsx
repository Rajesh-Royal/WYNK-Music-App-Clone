import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Slider from "react-slick";
import Container from "../../containers/container";

const SongSlider = (props: any) => {
  const { songData } = props;
  const sliderSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 5,
    nextArrow: (
      <div>
        <button className="bg-black opacity-50 w-10 h-10 rounded-full flex justify-center items-center focus:outline-none">
          <ChevronRightIcon className="text-white h-5 w-5" />
        </button>
      </div>
    ),
    prevArrow: (
      <div>
        <button className="bg-black opacity-50 w-10 h-10 rounded-full flex justify-center items-center focus:outline-none">
          <ChevronLeftIcon className="h-5 w-5 text-white" />
        </button>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1162,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <Container>
        <div className="slider-container my-16 px-2 song-slider">
          <div className="flex justify-between items-center text-gray-600 dark:text-gray-300">
            <p className="font-medium text-2xl">{props?.title || "Songs"}</p>
            <a href="" className="text-red-500 text-sm mr-8">
              More
            </a>
          </div>
          <div className="mt-4 dark:text-gray-200 relative">
            <Slider {...sliderSettings}>
              {songData?.map((song: any) => {
                return (
                  <div key={song.title} className="xs:pr-2 pr-2">
                    <img src={song.image} alt="" className="rounded-lg" />
                    <p className="text-base mt-3">{song.title.substring(0, 23)}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {song.description?.substring(0, 30)}
                    </p>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default SongSlider;
