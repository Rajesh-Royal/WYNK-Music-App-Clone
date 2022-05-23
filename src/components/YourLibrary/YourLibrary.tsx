import React from "react";
import Downloads from "../../assets/images/your-library/downloads.webp";
import LikedSongs from "../../assets/images/your-library/liked-songs.webp";
import RecentlyPlayed from "../../assets/images/your-library/recently-played.webp";
import YourPlaylist from "../../assets/images/your-library/your-playlists.webp";
import Container from "../../containers/container";
import PlayIconWithOverlay from "../../containers/PlayIconWithOverlay";

const YourLibrary = () => {
  return (
    <Container className="px-2">
      <h4 className="text-2xl text-gray-600 dark:text-gray-200 font-medium">Your Library</h4>
      <div className="flex space-x-5 flex-nowrap items-center text-gray-600 dark:text-gray-200 overflow-x-auto my-5 pb-3">
        <div className="flex flex-col space-y-4">
          <PlayIconWithOverlay>
            <img src={YourPlaylist} alt="Your Playlist" className="cursor-pointer" />
          </PlayIconWithOverlay>
          <p>Your Playlists</p>
        </div>
        <div className="flex flex-col space-y-4">
          <PlayIconWithOverlay>
            <img src={RecentlyPlayed} alt="Recently Played" className="cursor-pointer" />
          </PlayIconWithOverlay>
          <p>Recently Played</p>
        </div>
        <div className="flex flex-col space-y-4">
          <PlayIconWithOverlay>
            <img src={Downloads} alt="Downloads" className="cursor-pointer" />
          </PlayIconWithOverlay>
          <p>Downloads</p>
        </div>
        <div className="flex flex-col space-y-4">
          <PlayIconWithOverlay>
            <img src={LikedSongs} alt="Liked Songs" className="cursor-pointer" />
          </PlayIconWithOverlay>
          <p>Liked Songs</p>
        </div>
      </div>
    </Container>
  );
};

export default YourLibrary;
