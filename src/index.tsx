import React from "react";
import ReactDOM from "react-dom";
// @ts-ignore
import * as serviceWorker from "./serviceWorker";
import './assets/main.css';
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

serviceWorker.register();
