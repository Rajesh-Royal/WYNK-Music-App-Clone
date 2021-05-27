import React from "react";

interface LinksType {}

const FooterLinks = (props: LinksType): JSX.Element => {
  return (
    <React.Fragment>
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-400 text-xs px-2 py-5 footer-links"
        data-testid="footer links">
        <div className="link-container">
          <p className="text-base text-gray-600 dark:text-gray-200 font-semibold pb-4">
            LATEST ALBUMS
          </p>
          <div className="links leading-7">
            SOUR | Sardar Ka Grandson | Master | Love Marriage | Love Action Drama | My Indian
            Boyfriend Telugu Version | Kgf Chapter 1 (Kannada) | Praktan | G.O.A.T. | Bhavartha
            Mauli | Yuva Sarkar | Kati Jeher Hai | Mal mahu jiban mati | Justice
          </div>
        </div>
        <div className="link-container ">
          <p className="text-base text-gray-600 dark:text-gray-200 font-semibold pb-4">GENRES</p>
          <div className="links leading-7">
            Rock Songs | Patriotic songs | Sufi Music | Ghazals | Workout Music | Devotional Songs |
            Sad Songs | DJ Songs
          </div>
        </div>
        <div className="link-container ">
          <p className="text-base text-gray-600 dark:text-gray-200 font-semibold pb-4">OLD SONGS</p>
          <div className="links leading-7">
            Old Songs | Old Hindi Songs | Old English Songs | Old Punjabi Songs | Old Telugu Songs |
            Old Tamil Songs | Old Bengali Songs | Old Malayalam Songs | Old Kannada Songs
          </div>
        </div>
        <div className="link-container ">
          <p className="text-base text-gray-600 dark:text-gray-200 font-semibold pb-4">
            TOP ARTISTS
          </p>
          <div className="links leading-7">
            Guru Randhawa | Arijit Singh | Atif Aslam | Justin Bieber | Gulzar | Armaan Malik |
            Sidhu Moose Wala | Alan Walker | Udit Narayan | Sonu Nigam | Sid Sriram | Akhil |
            Darshan Raval | Shreya Ghoshal | Alka Yagnik
          </div>
        </div>
        <div className="link-container ">
          <p className="text-base text-gray-600 dark:text-gray-200 font-semibold pb-4">LANGUAGES</p>
          <div className="links leading-7">
            Latest Bengali Songs | Latest Bhojpuri Songs | Latest English Songs | Latest Haryanvi
            Songs | Latest Hindi Songs | Latest Kannada Songs | Latest Marathi Songs | Latest
            Punjabi Songs | Latest Tamil Songs | Latest Telugu Songs | Latest Oriya Songs | Latest
            Rajasthani Songs | Latest Malayalam Songs | Latest Gujarati Songs | Latest Assamese
            Songs
          </div>
        </div>
        <div className="link-container ">
          <p className="text-base text-gray-600 dark:text-gray-200 font-semibold pb-4">
            LATEST SONGS
          </p>
          <div className="links leading-7">
            Chhaap Tilak | Tohfa | Naiyo Lagna | Rabba Maine Chand Vekhya | Tum Bewafa Ho |
            Machayenge 3 | Ramayana | Manmaniyan | Radhe Title Track | Aai Hai | Main Teri Ho Gayi
            (From Sardar Ka Grandson) | Doob Gaye | Tu Bhi Sataya Jayega | Jee Ni Karda (From |
            Bedard
          </div>
        </div>
        <div className="link-container">
          <p className="text-base text-gray-600 dark:text-gray-200 font-semibold pb-4">TOP SONGS</p>
          <div className="links leading-7">
            Thoda Thoda Pyaar | Baarish Ki Jaaye | Lut Gaye (Feat. Emraan Hashmi) | Libaas | Pal Pal
            Dil Ke Paas - Title Track | Saranga Dariya | Ik Mulaqaat | Bewafa Tera Masoom Chehra |
            Bepanah Pyaar | Meri Aashiqui | Taaron Ke Shehar | Hawa Banke - Single | Main Jis Din
            Bhulaa Du | Radhe Title Track | Tum Hi Aana
          </div>
        </div>
        <div className="link-container ">
          <p className="text-base text-gray-600 dark:text-gray-200 font-semibold pb-4">
            TOP SEARCHED LYRICS
          </p>
          <div className="links leading-7">
            Coca Cola | Aankh Marey | Dil Chori | Leja Re | Bom Diggy Diggy | Tere Bin | Machayenge
            | Tera Yaar Hoon Main | Kar Gayi Chull | Morni Banke | Raabta (Title Track) | Chalti Hai
            Kya 9 Se 12 | Galti Se Mistake | Sunny Sunny
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FooterLinks;
