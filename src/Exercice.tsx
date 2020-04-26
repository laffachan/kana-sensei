import React, { useState, useEffect } from "react";
import classNames from "classnames";

type Props = {
  data: string[][];
};

function getKana(kanas: string[][], romaji: string): string {
  const kana = kanas.find(kana => kana[1] === romaji);
  return kana ? kana[0] : "";
}

function Exercice({ data }: Props) {
  const [randomKana, setRandomKana] = useState(
    data[Math.floor(Math.random() * data.length)]
  );
  // Changer the input while typing
  const [inputValue, setInputValue] = useState("");
  // Change button if wrong answer
  const [isWrong, setIsWrong] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  // Used when the answer is wrong and the kana exist to help the user

  function checkInput() {
    if (
      data.find(([_kana, romaji]) => inputValue.toLowerCase().trim() === romaji)
    ) {
      if (randomKana[1] === inputValue.toLowerCase().trim()) {
        console.log(inputValue, randomKana[1]);
        setIsWrong(false);
        setIsAnswered(true);
        setTimeout(() => {
          clear();
        }, 1000);
      } else {
        setIsAnswered(true);
        setIsWrong(true);
      }
    }
  }

  useEffect(checkInput, [inputValue]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  // After the answer, change the kana
  function clear() {
    console.log("clear");
    setInputValue("");
    setRandomKana(data[Math.floor(Math.random() * data.length)]);
    setIsAnswered(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    clear();
  }

  return (
    <div className="pt-12 text-center">
      <div className="border-2 border-gray-400 rounded p-2 mb-6 inline-block text-6xl w-32">
        {randomKana[0]}
      </div>
      {/*       <div className="border-2 border-gray-400 rounded p-2 mb-6 inline-block text-6xl w-32 uppercase">
        {isAnswered ? randomKana[1] : "?"}
      </div> */}
      <form action="#" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            className={classNames(
              "border border-gray-400 rounded-md mb-4 px-2 py-1 uppercase text-center w-24 text-xl",
              {
                "border-red-800 bg-red-200 text-red-800": isAnswered && isWrong,
                "border-green-800 bg-green-200 text-green-800":
                  isAnswered && !isWrong
              }
            )}
            minLength={1}
            maxLength={4}
            size={4}
            spellCheck={false}
            autoCapitalize="none"
            autoCorrect="off"
            autoComplete="off"
            onChange={handleChange}
            value={inputValue}
          />
        </div>
        {isAnswered ? (
          isWrong ? (
            <>
              <p className="text-gray-700 text-lg">
                Correct answer:{" "}
                <span className="font-bold uppercase">{randomKana[1]}</span>
              </p>
              <p className="text-gray-600">
                <span className="uppercase">{inputValue}</span> ={" "}
                {getKana(data, inputValue)} / press enter to continue...
              </p>
            </>
          ) : (
            <p className="text-gray-700 text-lg">
              <span role="img" aria-label="">
                😄
              </span>{" "}
              Good !
            </p>
          )
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default Exercice;
