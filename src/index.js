import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import setUpMockServer from "./api/mock.server";

setUpMockServer();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
