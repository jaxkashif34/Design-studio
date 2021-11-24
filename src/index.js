import React from "react";

import ReactDOM from "react-dom";
// ****************** React Bootstrap ****************
import "bootstrap/dist/css/bootstrap.min.css";
// ****************** React Bootstrap ****************

import "./Assets/Sass/index.scss";

// import App from "./App";
import App from "./App";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
