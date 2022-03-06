import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import setUpMockServer from "./api/mock.server";
import { AddressProvider } from "./context/address-context";

setUpMockServer("production");

console.log(process.env.NODE_ENV);
// if (process.env.NODE_ENV === "development") {
//   makeServer({ environment: "development" });
// }

ReactDOM.render(
  <React.StrictMode>
    <AddressProvider>
      <App />
    </AddressProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
