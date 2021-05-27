import React, { ReactElement, useContext } from "react";
import NightMoon from "../../assets/icons/night.svg";
import DaySun from "../../assets/icons/day.svg";
import { ThemeContext } from "../../containers/ThemeProvider";

export default function ToggleDarkMode(): ReactElement {
  const { value: isDarkMode, toggleTheme } = useContext(ThemeContext);

  if (
    localStorage.WYNK_Theme === "dark" ||
    (!("WYNK_Theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <>
      {isDarkMode ? (
        <img
          src={DaySun}
          className="w-5 cursor-pointer transition-all duration-500"
          alt="sun icon"
          onClick={() => {
            localStorage.WYNK_Theme = "light";
            toggleTheme();
          }}
        />
      ) : (
        <img
          src={NightMoon}
          className="w-5 cursor-pointer"
          alt="moon icon"
          onClick={() => {
            localStorage.WYNK_Theme = "dark";
            toggleTheme();
          }}
        />
      )}
    </>
  );
}
