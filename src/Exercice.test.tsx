import React from "react";
import ReactDOM from "react-dom";
import Exercice from "./Exercice";
import { hiragana } from "./kana";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Exercice data={hiragana} />, div);
});
