import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import { Examples } from "./examples";
import "./tailwind.output.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Examples path="/examples/*" />
    </Router>
  </React.StrictMode>,
  rootElement
);
