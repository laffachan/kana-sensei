import React, { useState } from "react";
import { hiragana } from "./kana";
import "./exercice.css";

function Hiragana() {
  // Change button if success or not
  const [btnanswer, setBtnanswer] = useState("OK");
  const [randomKana, setRandomKana] = useState(
    hiragana[Math.floor(Math.random() * hiragana.length)]
  );
  // Changer the input while typing
  const [inputValue, setInputValue] = useState("");
  // Change button if wrong answer
  const [isWrong, setIsWrong] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  // After the answer change the kana
  function clear() {
    setRandomKana(hiragana[Math.floor(Math.random() * hiragana.length)]);
    setInputValue("");
    setBtnanswer("OK");
    setIsWrong(false);
  }

  function handleSuccess(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
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

export default Hiragana;
