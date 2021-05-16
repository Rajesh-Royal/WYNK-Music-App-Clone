import { Fragment} from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, SearchIcon } from "@heroicons/react/outline";
import { MoonIcon } from "@heroicons/react/solid";
import WynkBlack from "../../assets/icons/Wynk-black.svg";
import WynkWhite from "../../assets/icons/Wynklogo-white.svg";
import LanguageIcon from "../../assets/icons/languageIcon.svg";
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";

export default function Header() {

  return (
    <Popover className="relative bg-white border-b-2 border-gray-100">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-6 md:justify-between md:space-x-10">
              <div className="flex justify-start">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img className="h-8 w-auto sm:h-10" src={WynkBlack} alt="" />
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white mr-4 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            <NavBar />
            {/* Right side search and */}
             <div className="flex justify-around flex-1 hidden xl:flex">
             <div className="text-black bg-white flex items-center flex-1 justify-end">
                <div className="border rounded overflow-hidden flex">
                <button className="flex items-center justify-center px-4 outline-none">
                    <SearchIcon className="text-gray-500 w-5 mx-4"/>
                  </button>
                  <input
                    type="text"
                    className="px-2 py-2 outline-none text-base font-medium text-gray-500"
                    placeholder="Search for music you love!"
                    style={{width: "100%", maxWidth: "250px"}}
                  />
                </div>
              </div>
              <div className="hidden md:flex items-center ml-4">
                  <MoonIcon className="text-gray-500 w-5 mx-4"/>
                  <img src={LanguageIcon} alt="language icon" className="text-gray-500 w-5 mx-4"/>
                <button
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none ml-4"
                >
                  Sign in
                </button>
              </div>
             </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
                <MobileMenu />
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
