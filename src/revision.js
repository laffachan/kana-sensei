import React from "react";
import { hiragana, katakana } from "./kana.js";
import "./revision.css";

function Revision() {
  return (
    <div className="kana_revision">
      <div>
        <p>Hiragana</p>
        {hiragana.map(e => (
          <p>
            {e[0]} : {e[1]}
          </p>
        ))}
      </div>

      <div>
        <p>Katakana</p>
        {katakana.map(e => (
          <p>
            {e[0]} : {e[1]}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Revision;
