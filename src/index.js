import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import setUpMockServer from "./api/mock.server";
import { AddressProvider } from "./context/address-context";

setUpMockServer();

ReactDOM.render(
  <React.StrictMode>
    <AddressProvider>
      <App />
    </AddressProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
