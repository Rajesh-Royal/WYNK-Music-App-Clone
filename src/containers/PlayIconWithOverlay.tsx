import { PlayIcon } from "@heroicons/react/solid";
import React from "react";

const PlayIconWithOverlay = ({ children }: any): JSX.Element => {
  return (
    <div className="min-w-song-slide min-h-song-slide relative song-card">
      {children}
      <div className="overlay absolute z-20 w-full h-full align-center justify-center top-0 left-0 bg-gradient-to-tr from-black hidden song-card-overlay duration-300 rounded-lg">
        <div className="flex items-center justify-center">
          <a href="/single-song">
            <PlayIcon className="text-red-500 text-md w-12 h-12 bg-white rounded-full p-2 hover:w-14 hover:h-14 duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlayIconWithOverlay;
