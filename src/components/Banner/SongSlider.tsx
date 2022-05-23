import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { PlayIcon } from "@heroicons/react/solid";
import React from "react";
import Slider from "react-slick";
import Container from "../../containers/container";

const SongSlider = (props: any) => {
  const { songData } = props;
  const sliderSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: props?.slideToShow || 6,
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
                  <div key={song.title} className="pr-8">
                    <div className="min-w-song-slide min-h-song-slide relative song-card">
                      {/* <div className="bg-gray-600 min-h-song-slide w-44 rounded-lg animate-pulse flex absolute z-0"></div> */}
                      <img src={song.image} alt="" className="rounded-lg z-10" />
                      <div className="overlay absolute z-20 w-full h-full align-center justify-center top-0 left-0 bg-gradient-to-tr from-black hidden song-card-overlay duration-300 rounded-lg">
                        <div className="flex items-center justify-center">
                          <a href="/single-song">
                            <PlayIcon className="text-red-500 text-md w-12 h-12 bg-white rounded-full p-2 hover:w-14 hover:h-14 duration-300" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="text-base mt-3 truncate pr-2 md:pr-4">{song.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 pr-2 md:pr-4 truncate">
                      {song.description}
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
