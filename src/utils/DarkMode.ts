export const isDarkMode: boolean =
  localStorage.WYNK_Theme === "dark" &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
