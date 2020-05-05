import React, { useState } from "react";
import classNames from "classnames";

function findKana(kanaList: string[][], romaji: string): string | undefined {
  const [kana] = kanaList.find(kana => kana[1] === romaji) || [];
  return kana;
}

type Props = {
  kanaList: string[][];
  kana: string;
  setKana: React.Dispatch<React.SetStateAction<string[]>>;
};

// kanaList is an array of pairs kana <-> romaji
// example: [["あ", "a"], ["い", "i"] ...]
// kana is the kana that the user needs to translate
// example: "あ"
function Question({ kanaList, kana, setKana }: Props) {
  const [isWrong, setIsWrong] = useState(false);
  const [exist, setExist] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const userKana = findKana(kanaList, e.target.value);
    setInputValue(e.target.value);
    setIsAnswered(true);
    // si il existe
    if (userKana) {
      setExist(true);
      setIsWrong(userKana !== kana);
      if (userKana === kana) {
        setTimeout(() => {
          clear();
        }, 1000);
      }
    } else {
      setExist(false);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(inputValue);
    clear();
  }

  function clear() {
    setIsAnswered(false);
    setInputValue("");
    setKana(kanaList[Math.floor(Math.random() * kanaList.length)]);
  }

  return (
    <div className="pt-12 text-center">
      <div className="border-2 border-gray-400 rounded p-2 mb-6 inline-block text-6xl w-32 m-2">
        {kana}
      </div>
      <form action="#" onSubmit={handleSubmit}>
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
          aria-label="questionInput"
          value={inputValue}
        />
        <div data-testid="status">
          {!isAnswered ? "" : !exist ? "" : isWrong ? "" : "good"}{" "}
        </div>
        {isAnswered && isWrong ? (
          <>
            <p className="text-gray-600">
              <span className="uppercase">{inputValue}</span> ={" "}
              {findKana(kanaList, inputValue)} / press enter to continue...
            </p>
          </>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default Question;
