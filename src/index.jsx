import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Clock from './Clock';

ReactDOM.render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>,
  document.getElementById("clock")
);
