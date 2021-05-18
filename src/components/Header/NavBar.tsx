import React, { Fragment, MutableRefObject, useRef } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import classNames from "../../utils/ClassNames";
import { MyMusic } from "./HeaderData";

interface Props {
  DarkMode?: boolean;
}

const NavBar = ({ DarkMode }: Props) => {
  const buttonRef = useRef() as MutableRefObject<HTMLButtonElement>;
  const mouseEnter = () => buttonRef?.current.click();
  return (
    <Popover.Group as="nav" className="hidden md:flex space-x-8 items-end" data-testid="navigation">
      <a
        href="#"
        className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400 transition-all duration-300">
        HOME
      </a>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? "text-gray-900" : "text-gray-500",
                "group rounded-md inline-flex items-center text-sm font-medium hover:text-gray-900 focus:outline-none dark:hover:text-gray-400 dark:text-gray-300 transition-all duration-300"
              )}
              data-testid="MyMusic-dropdown"
              ref={buttonRef}
              onMouseEnter={mouseEnter}>
              <span>MY MUSIC</span>
              <ChevronDownIcon
                className={classNames(
                  open ? "text-gray-600" : "text-gray-400",
                  "ml-2 h-5 w-5 group-hover:text-gray-500 dark:text-gray-300 text-sm"
                )}
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <Popover.Panel
                static
                className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                data-testid="my-music-dropdown">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 dark:bg-gray-850">
                    {MyMusic.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 text-red-600 dark:text-red-700"
                          aria-hidden="true"
                        />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900 dark:text-gray-300">
                            {item.name}
                          </p>
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>

      <a
        href="#"
        className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400 transition-all duration-300">
        PODCASTS
      </a>
      <a
        href="#"
        className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400 transition-all duration-300">
        DOWNLOAD APP
      </a>
    </Popover.Group>
  );
};

export default NavBar;
