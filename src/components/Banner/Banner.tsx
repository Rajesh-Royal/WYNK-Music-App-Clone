import React from "react";
import { banners } from "../../data/banners";
import { fallbackImage } from "../../data/fallbackImage";

const Banner = () => {
  return (
    <React.Fragment>
      {banners.map((item) => {
        return <img src={item.image} alt="" key={item.title} />;
      })}
    </React.Fragment>
  );
};

export default Banner;
