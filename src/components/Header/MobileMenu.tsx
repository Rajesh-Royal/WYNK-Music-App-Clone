import React from "react";
import { Popover } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { MoonIcon } from "@heroicons/react/solid";
import { MyMusic } from "./HeaderData";
import WynkBlack from "../../assets/icons/Wynk-black.svg";
import LanguageIcon from "../../assets/icons/languageIcon.svg";

interface Props {}

const MobileMenu = (props: Props) => {
  return (
    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
      <div className="pt-5 pb-6 px-5">
        <div className="flex items-center justify-between">
          <div>
            <img
              className="h-8 w-auto"
              src={WynkBlack}
              alt="WYNK logo"
            />
          </div>
          <div className="-mr-2">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
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
                className="-m-3 p-3 flex items-center rounded-md hover:bg-red-50"
              >
                <item.icon
                  className="flex-shrink-0 h-6 w-6 text-red-600"
                  aria-hidden="true"
                />
                <span className="ml-3 text-base font-medium text-gray-900">
                  {item.name}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="py-6 px-5 space-y-6">
        <div className="grid grid-cols-4 gap-y-4 gap-x-8">
            <a href="#" className="text-base font-medium text-gray-900 hover:text-red-700">
            Home
            </a>
            <a href="#" className="text-base font-medium text-gray-900 hover:text-red-700">
            Podcast
            </a>
            <MoonIcon className="text-gray-900 hover:text-red-700 w-5 mx-4"/>
            <img src={LanguageIcon} alt="language icon" className="w-5"/>
        </div>
        <div>
            <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700">
                SignIn
            </a>
            <p className="mt-6 text-center text-base font-medium text-gray-500">
                On Mobile? Download from {" "}
                <a href="#" className="text-red-600 hover:text-red-500">
                App Store
                </a>
                {" "}or{" "}
                <a href="#" className="text-red-600 hover:text-red-500">
                Play Store
                </a>
            </p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
