import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import "./tailwind.output.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <h1>Hello</h1>
    </Router>
  </React.StrictMode>,
  rootElement
);
