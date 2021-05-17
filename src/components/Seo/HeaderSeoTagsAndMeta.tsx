import React from "react";
import Helmet from "react-helmet";

interface Props {

}

const HeaderSeoTagsAndMeta = (props: Props) => {
    return (
        <Helmet>
                <meta content="text/html;charset=utf-8" http-equiv="Content-Type"/>
                <title>Listen &amp; Download Latest MP3 Hindi, English, Bollywood Songs Online | Wynk Music</title>
                <meta content="Listen &amp; Download Latest MP3 Hindi, English, Bollywood Songs Online | Wynk Music" name="title"/>

                <meta content="Wynk Music - Download &amp; Listen mp3 songs, music online for free. Enjoy from over 30 Lakh Hindi, English, Bollywood, Regional, Latest, Old songs and more. Create and Listen to your playlist, like and share your favorite music on the Wynk Music app." name="description"/>

                <meta content="Download songs, music, mp3 songs online, listen songs, MP3 songs, free online songs, wynk music, online latest songs, free music, popular songs, movie songs, listen to songs online, listen to free music, online music, free music online, latest movie songs, hindi songs, music albums, free music, online music, english songs, hollywood songs, playlists music, music online, hindi songs, play songs, online songs" name="keywords"/>
        </Helmet>
    );
};

export default HeaderSeoTagsAndMeta;
