import React, { useContext } from "react";
import { Popover } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { MyMusic } from "./HeaderData";
import WynkBlack from "../../assets/icons/Wynk-black.svg";
import LanguageIcon from "../../assets/icons/languageIcon.svg";
import WynkWhite from "../../assets/icons/Wynklogo-white.svg";
import LanguageWhiteIcon from "../../assets/icons/languageWhiteIcon.svg";
import { ThemeContext } from "../../containers/ThemeProvider";
import ToggleDarkMode from "./ToggleDarkMode";

const MobileMenu = () => {
  const { value } = useContext(ThemeContext);
  const isDarkMode = value;
  return (
    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-black divide-y-2 divide-gray-50">
      <div className="pt-5 pb-6 px-5">
        <div className="flex items-center justify-between">
          <div>
            <img className="h-8 w-auto" src={isDarkMode ? WynkWhite : WynkBlack} alt="WYNK logo" />
          </div>
          <div className="-mr-2">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-100 hover:text-gray-500 hover:bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
              <span className="sr-only">Close menu</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
        <div className="mt-6">
          <nav className="grid gap-y-8">
            {MyMusic.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-m-3 p-3 flex items-center rounded-md hover:bg-red-50 dark:hover:bg-gray-800">
                <item.icon className="flex-shrink-0 h-6 w-6 text-red-600" aria-hidden="true" />
                <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-300 hover:text-gray-100">
                  {item.name}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="py-6 px-5 space-y-6">
        <div className="grid grid-cols-4 gap-y-4 gap-x-8">
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:text-red-700 dark:text-gray-300">
            Home
          </a>
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:text-red-700 dark:text-gray-300">
            Podcast
          </a>
          <ToggleDarkMode />
          <img
            src={!isDarkMode ? LanguageIcon : LanguageWhiteIcon}
            alt="language icon"
            className="w-5"
          />
        </div>
        <div>
          <a
            href="#"
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white dark:text-gray-300 bg-red-600 hover:bg-red-700 dark:bg-red-700">
            SignIn
          </a>
          <p className="mt-6 text-center text-base font-medium text-gray-500">
            On Mobile? Download from{" "}
            <a href="#" className="text-red-600 hover:text-red-500 dark:text-red-700">
              App Store
            </a>{" "}
            or{" "}
            <a href="#" className="text-red-600 hover:text-red-500 dark:text-red-700">
              Play Store
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
