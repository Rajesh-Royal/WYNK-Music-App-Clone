import React from "react";
import Helmet from "react-helmet";

interface Props {

}

const HeaderSeoTagsAndMeta = (props: Props) => {
    return (
        <Helmet>
                <meta content="text/html;charset=utf-8" http-equiv="Content-Type"/>
                <link rel="icon" href="https://wynk.in/assets/favicon-wht.ico" />
                <link href="https://wynk.in/assets/favicon-wht.ico" rel="shortcut icon" type="image/x-icon" />
                <link href="https://wynk.in/assets/icons/icon-192x192.png" rel="apple-touch-icon" sizes="180x180" />
                <meta content="#f5f5f5" name="theme-color" />
                <link rel="canonical" href="https://wynk.in/music" />
                <meta content="INDEX, FOLLOW" name="ROBOTS" />

                <title>Listen &amp; Download Latest MP3 Hindi, English, Bollywood Songs Online | Wynk Music</title>
                <meta content="Listen &amp; Download Latest MP3 Hindi, English, Bollywood Songs Online | Wynk Music" name="title"/>

                <meta content="Wynk Music - Download &amp; Listen mp3 songs, music online for free. Enjoy from over 30 Lakh Hindi, English, Bollywood, Regional, Latest, Old songs and more. Create and Listen to your playlist, like and share your favorite music on the Wynk Music app." name="description"/>

                <meta content="Download songs, music, mp3 songs online, listen songs, MP3 songs, free online songs, wynk music, online latest songs, free music, popular songs, movie songs, listen to songs online, listen to free music, online music, free music online, latest movie songs, hindi songs, music albums, free music, online music, english songs, hollywood songs, playlists music, music online, hindi songs, play songs, online songs" name="keywords"/>

                <meta content="Wynk Music - Download &amp; Listen mp3 songs, music online for free. Enjoy from over 30 Lakh Hindi, English, Bollywood, Regional, Latest, Old songs and more. Create and Listen to your playlist, like and share your favorite music on the Wynk Music app." property="og:description" />

                <meta content="Wynk Music" property="og:site_name" />
                <meta content="website" property="og:type" />
                <meta content="https://wynk.in/assets/icons/icon-192x192.png" property="og:image" />
                <meta content="https://wynk.in/music" property="og:url" />
                <meta content="summary_large_image" name="twitter:card" />
                <meta content="https://wynk.in/music" name="twitter:url" />
                <meta content="@wynkmusic" name="twitter:site" />
                <meta content="Wynk Music - Download MP3 Songs Online, Play Old &amp; New MP3 Music Online Free" name="twitter:title" />
                <meta content="Wynk Music - Download &amp; Listen mp3 songs, music online for free. Enjoy from over 30 Lakh Hindi, English, Bollywood, Regional, Latest, Old songs and more. Create and Listen to your playlist, like and share your favorite music on the Wynk Music app." name="twitter:description" />
                <meta content="200" property="og:image:width" />
                <meta content="200" property="og:image:height"  />

        </Helmet>
    );
};

export default HeaderSeoTagsAndMeta;
