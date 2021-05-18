import React, { ReactElement, useState } from "react";
import NightMoon from "../../assets/icons/night.svg";
import DaySun from "../../assets/icons/day.svg";

export default function ToggleDarkMode({ toggleTheme }: any): ReactElement {
  const [dark, setDark] = useState<boolean>(localStorage.WYNK_Theme === "dark");

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
      {dark ? (
        <img
          src={DaySun}
          className="w-5 cursor-pointer transition-all duration-500"
          alt="sun icon"
          onClick={() => {
            setDark(false);
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
            setDark(true);
            localStorage.WYNK_Theme = "dark";
            toggleTheme();
          }}
        />
      )}
    </>
  );
}
