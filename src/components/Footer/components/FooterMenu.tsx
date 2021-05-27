import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagramSquare, faTwitter } from "@fortawesome/free-brands-svg-icons";

interface MenuTypes {}

const FooterMenu = (props: MenuTypes): JSX.Element => {
  return (
    <React.Fragment>
      <div
        className="flex justify-between items-center text-gray-600 dark:text-gray-200 flex-wrap border-t border-gray-700 footer-menu"
        data-testid="footer menu">
        <div className="flex justify-center lg:justify-start flex-grow xl:divide-x divide-gray-300 dark:divide-gray-500  text-xs flex-wrap py-5 leading-7 font-semibold md:leading-none">
          <a href="#" className="px-2 hover:text-gray-400">
            ABOUT US
          </a>
          <a href="#" className="px-2 hover:text-gray-400">
            ADVERTISE WITH US
          </a>
          <a href="#" className="px-2 hover:text-gray-400">
            PRIVACY POLICY
          </a>
          <a href="#" className="px-2 hover:text-gray-400">
            TERMS OF USE
          </a>
          <a href="#" className="px-2 hover:text-gray-400">
            WORK WITH US
          </a>
          <a href="#" className="px-2 hover:text-gray-400">
            CONTACT US
          </a>
          <a href="#" className="px-2 hover:text-gray-400">
            FEEDBACK
          </a>
          <a href="#" className="px-2 hover:text-gray-400">
            HELLOTUNES
          </a>
        </div>
        <div className="flex justify-center lg:justify-end items-center m-w-xl py-5 flex-1">
          <p className="border border-gray-500 rounded-full px-3 py-1 cursor-pointer mx-3 hover:text-blue-800">
            <FontAwesomeIcon icon={faFacebookF} />
          </p>
          <p className="border border-gray-500 rounded-full px-2 py-1 mx-3 cursor-pointer hover:text-blue-400">
            <FontAwesomeIcon icon={faTwitter} />
          </p>
          <p className="border border-gray-500 rounded-full px-2.5 py-1 mx-3 cursor-pointer hover:text-red-500">
            <FontAwesomeIcon icon={faInstagramSquare} />
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FooterMenu;
