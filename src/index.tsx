import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/tailwind.css";
import App from "./App";
import ThemeProvider from "./containers/ThemeProvider";

// slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
