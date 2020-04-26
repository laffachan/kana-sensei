import React, { useState } from "react";

type Props = {
  data: string[][];
};

function Exercice({ data }: Props) {
  // Change button if success or not
  const [btnanswer, setBtnanswer] = useState("OK");
  const [randomKana, setRandomKana] = useState(
    data[Math.floor(Math.random() * data.length)]
  );
  // Changer the input while typing
  const [inputValue, setInputValue] = useState("");
  // Change button if wrong answer
  const [isWrong, setIsWrong] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  // Used when the answer is wrong and the kana exist to help the user
  const [userAnswer, setUserAnswer] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  // After the answer, change the kana
  function clear() {
    setRandomKana(data[Math.floor(Math.random() * data.length)]);
    setInputValue("");
    setBtnanswer("OK");
    setIsAnswered(false);
    setUserAnswer("");
  }

  function wrongAnswer() {
    const kana = data.find(e => e[1] === inputValue);
    if (kana) {
      setUserAnswer(`${inputValue} is ${kana[0]}`);
    } else {
      setUserAnswer(`${inputValue} doesn't exist`);
    }
  }

  function handleSuccess(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (randomKana[1] === inputValue.toLowerCase().trim()) {
      setIsWrong(false);
      setIsAnswered(true);
      setBtnanswer("🙂");
      setTimeout(() => {
        clear();
      }, 1000);
    } else {
      setIsAnswered(true);
      setBtnanswer(randomKana[1]);
      setIsWrong(true);
      wrongAnswer();
      setTimeout(() => {
        clear();
      }, 4000);
    }
  }

  return (
    <div className="pt-12 text-center">
      <div className="border border-gray-400 rounded p-2 mb-6 inline-block text-6xl">
        {randomKana[0]}
      </div>
      <form action="#" onSubmit={handleSuccess}>
        <input
          type="text"
          className="border border-gray-400 rounded-md px-2 py-1 mr-2 lowercase text-center"
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
        <input
          type="submit"
          className={[
            !isAnswered
              ? "bg-gray-300 px-2 py-1 w-12 rounded-md border"
              : isWrong
              ? "bg-red-500 text-red-100 px-2 py-1 w-12 rounded-md border"
              : "bg-green-500 text-green-100 px-2 py-1 w-12 rounded-md border"
          ].join(" ")}
          value={btnanswer}
        />
        <p className="mt-3 text-lg text-red-500">{userAnswer}</p>
      </form>
    </div>
  );
}

export default Exercice;
