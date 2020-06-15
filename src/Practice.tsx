import React, { useState } from "react";
import Question from "./Question";

type Props = {
  data: string[][];
};

function getRandomKana(data: string[][]): string[] | (() => string[]) {
  return data[Math.floor(Math.random() * data.length)];
}

function Practice({ data }: Props) {
  let timerId: number;
  const [randomKana, setRandomKana] = useState(getRandomKana(data));
 

  function handleGoodAnswered() {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = window.setTimeout(() => setRandomKana(getRandomKana(data)), 1000);
  }

  function handleBadAnswered() {
    setRandomKana(getRandomKana(data));
  }

  return (

    <div>
      <div className="pt-12 text-center text-xl">
        <Question
          kanaList={data}
          kana={randomKana[0]}
          goodAnswer={randomKana[1]}
          onGoodAnswered={handleGoodAnswered}
          onBadAnswered={handleBadAnswered}
        />
      </div>
    </div>
  );
}

export default Practice;
