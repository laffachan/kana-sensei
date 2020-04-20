import React, { useState } from "react";
import { hiragana, katakana } from "./kana.js";
import "./exercice.css";

function Exercice() {
  //Change button if success or not
  const [btnanswer, setBtnanswer] = useState("OK");
  // DOnner un kana random en fonction de ce qui est actif
  const [randomKana, setRandomKana] = useState("");
  // Changer la valeur de l'input en fonction de la réponse donnée
  const [inputValue, setInputValue] = useState("");
  // Activer Hiragana ou Katakana
  const [isHiragana, setIsHiragana] = useState(true);
  const [isKatakana, setIsKatakana] = useState(false);
  //Changer bouton si c'est faux
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

  //Après la réponse clear le input et le bouton et nouveau kana
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
    console.log(inputValue);
    console.log(randomKana[1]);
    e.preventDefault();
    if (randomKana[1] === inputValue.toLowerCase().trim()) {
      console.log("ok");
      setBtnanswer("Good 🙂");
      setTimeout(() => {
        clear();
      }, 1000);
    } else {
      console.log("not ok");
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
