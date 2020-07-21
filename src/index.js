import React from "react";
import ReactDOM from "react-dom";
import { Router, Redirect } from "@reach/router";
import { Examples } from "./examples";
import "./tailwind.output.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Redirect to="/examples" from="/" noThrow />
      <Examples path="/examples/*" />
    </Router>
  </React.StrictMode>,
  rootElement
);
