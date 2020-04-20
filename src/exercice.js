import React, { useState } from "react";
import { hiragana, katakana } from "./kana.js";
import "./exercice.css";

function Exercice() {
  // Change button if success or not
  const [btnanswer, setBtnanswer] = useState("OK");
  const [randomKana, setRandomKana] = useState("");
  // Changer the input while typing
  const [inputValue, setInputValue] = useState("");
  // Activer Hiragana ou Katakana
  const [isHiragana, setIsHiragana] = useState(true);
  const [isKatakana, setIsKatakana] = useState(false);
  // Change button if wrong answer
  const [isWrong, setIsWrong] = useState(false);

  function Hiragana() {
    setIsHiragana(true);
    setIsKatakana(false);
    setRandomKana(hiragana[Math.floor(Math.random() * hiragana.length)]);
  }

  function Katakana() {
    setIsKatakana(true);
    setIsHiragana(false);
    setRandomKana(katakana[Math.floor(Math.random() * katakana.length)]);
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  // After the answer change the kana
  function clear() {
    if (isHiragana) {
      setRandomKana(hiragana[Math.floor(Math.random() * hiragana.length)]);
    }
    if (isKatakana) {
      setRandomKana(katakana[Math.floor(Math.random() * katakana.length)]);
    }
    setInputValue("");
    setBtnanswer("OK");
    setIsWrong(false);
  }

  function handleSuccess(e) {
    setInputValue(e.target.value);
    e.preventDefault();
    if (randomKana[1] === inputValue.toLowerCase().trim()) {
      setBtnanswer("Good 🙂");
      setTimeout(() => {
        clear();
      }, 1000);
    } else {
      setBtnanswer("❌ " + randomKana[1]);
      setIsWrong(true);
      setTimeout(() => {
        clear();
      }, 2000);
    }
  }

  return (
    <div>
      <div className="switch_course">
        <button className="switchKana" onClick={Hiragana}>
          Hiragana
        </button>
        <button className="switchKana" onClick={Katakana}>
          Katakana
        </button>
      </div>
      <div className="randomKana">{randomKana[0]}</div>
      <form>
        <input
          type="text"
          className="answerKana"
          onChange={handleChange}
          value={inputValue}
        />
        <button
          type="submit"
          id="answer_btn"
          onClick={handleSuccess}
          className={isWrong ? "red_btn" : "answer_btn"}
        >
          {btnanswer}
        </button>
      </form>
    </div>
  );
}

export default Exercice;
