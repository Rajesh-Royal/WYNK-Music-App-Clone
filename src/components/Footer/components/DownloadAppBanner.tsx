import React from "react";
import WynkLogo from "../../../assets/icons/WynkLogoFooter.svg";
import PlayStoreLogo from "../../../assets/icons/playstore.png";
import AppleStoreLogo from "../../../assets/icons/AppleStore.svg";

interface BannerTypes {}

const DownloadAppBanner = (props: BannerTypes): JSX.Element => {
  return (
    <React.Fragment>
      <div
        className="grid md:grid-cols-6 gap-5 grid-cols-4 items-center text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-850 p-5 rounded-sm mx-2 my-10 download-app-banner"
        data-testid="App Download Banner">
        <div className="col-span-4 sm:col-span-2 md:col-span-4 flex items-center">
          <img src={WynkLogo} alt="wynk-footer-logo" className="max-w-sm w-16" />
          <div className="pl-3">
            <h4 className="font-bold sm:text-xl text-md">Best way to Listen to Music! </h4>
            <p className="small:text-sm text-xs">
              Don’t forget to install Wynk Music on your mobile phones
            </p>
          </div>
        </div>
        <img src={PlayStoreLogo} alt="wynk-footer-logo" className="col-span-2 sm:col-span-1" />
        <img src={AppleStoreLogo} alt="wynk-footer-logo" className="col-span-2 sm:col-span-1" />
      </div>
    </React.Fragment>
  );
};

export default DownloadAppBanner;
