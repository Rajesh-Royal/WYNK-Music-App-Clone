import React from "react";

interface CopyrightTypes {}

const FooterCopyright = (props: CopyrightTypes): JSX.Element => {
  return (
    <React.Fragment>
      <div
        className="flex justify-between items-center text-xs text-gray-500 flex-wrap px-2 border-t border-gray-700 footer-copyright"
        data-testid="footer copyright">
        <p className="max-w-2xl py-5">
          Wynk Music is the one-stop music app for the latest to the greatest songs that you love.
          Play your favourite music online for free or download mp3. Enjoy from over 60 Lakh Hindi,
          English, Bollywood, Regional, Latest, Old songs and more.
        </p>
        <p className="py-5">2021 © All rights reserved | WYNK UI clone app</p>
      </div>
    </React.Fragment>
  );
};

export default FooterCopyright;
