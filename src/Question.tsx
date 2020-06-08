import React, { useState, useEffect } from "react";
import { DebounceInput } from "react-debounce-input";
import classNames from "classnames";

function findKana(kanaList: string[][], romaji: string): string | undefined {
  const [kana] = kanaList.find(kana  => kana[1] === romaji.toLowerCase()) || [];
  return kana;
}

type Props = {
  kanaList: string[][];
  kana: string;
  goodAnswer: string;
  onGoodAnswered: () => void;
  onBadAnswered: () => void;
};

const goodEmoji = [
  "😊",
  "🤓",
  "😃",
  "🤩",
  "🥳",
  "👍",
  "👏",
  "💪",
  "😍",
  "😁",
  "🤠"
];
const badEmoji = [
  "😆",
  "🤣",
  "🤐",
  "🙄",
  "🤢",
  "😵",
  "☹",
  "😰",
  "😭",
  "😖",
  "😱",
  "🤬",
  "👎"
];

// kanaList is an array of pairs kana <-> romaji
// example: [["あ", "a"], ["い", "i"] ...]
// kana is the kana that the user needs to translate
// example: "あ"
function Question({
  kanaList,
  kana,
  goodAnswer,
  onGoodAnswered,
  onBadAnswered
}: Props) {
  const [isCorrect, setIsCorrect] = useState(false);
  const [exist, setExist] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);

  const good = [...goodEmoji][
    Math.floor(Math.random() * [...goodEmoji].length)
  ];
  const bad = [...badEmoji][Math.floor(Math.random() * [...badEmoji].length)];

  useEffect(clear, [kana]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const userKana = findKana(kanaList, e.target.value);
    setInputValue(e.target.value);
    console.log(userKana, isAnswered, !isCorrect);
    // si il existe
    if (userKana) {
      console.log("test");
      setIsAnswered(true);
      setExist(true);
      setIsCorrect(userKana === kana);
      if (userKana === kana) {
        onGoodAnswered();
      }
    } else {
      setExist(false);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(inputValue);
    if (isAnswered === true) {
      if (!isCorrect) {
        onBadAnswered();
        clear();
      } 
    }
  }

  function clear() {
    setIsAnswered(false);
    setIsCorrect(false);
    setInputValue("");
  }

  return (
    <div className="pt-12 text-center">
      <div
        className={classNames(
          "border-2 border-gray-400 rounded p-2 mb-6 inline-block text-6xl w-32 m-2 ",
          {
            "border-green-400": isAnswered && isCorrect,
            "border-red-400": isAnswered && !isCorrect
          }
        )}
      >
        {kana}
      </div>
      <div
        className={classNames(
          "border-2 border-gray-400 rounded p-2 mb-6 inline-block text-6xl w-32 m-2",
          {
            "invisible hidden": !isAnswered || isCorrect,
            "visible show": isAnswered && !isCorrect
          }
        )}
      >
        {goodAnswer}
      </div>
      <form action="#" onSubmit={handleSubmit}>
        <DebounceInput
          debounceTimeout={300}
          type="text"
          className={classNames(
            "border border-gray-400 w-32 rounded-md mb-4 px-2 py-1 uppercase text-center w-24 text-xl",
            {
              "border-green-800 bg-green-200 text-green-800":
                isAnswered && isCorrect,
              "border-red-800 bg-red-200 text-red-800": isAnswered && !isCorrect
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
        <div data-testid="status" className="text-xl">
          {isAnswered && exist ? (
            isCorrect ? (
              <div data-testid="good">{good}</div>
            ) : (
              <div data-testid="bad">{bad}</div>
            )
          ) : (
            ""
          )}{" "}
        </div>
        {isAnswered && !isCorrect ? (
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

// import React, { useState, useEffect } from "react";
// import classNames from "classnames";

// function findKana(kanaList: string[][], romaji: string): string | undefined {
//   const [kana] = kanaList.find(kana => kana[1] === romaji) || [];
//   return kana;
// }

// type Props = {
//   kanaList: string[][];
//   kana: string;
//   goodAnswer: string;
//   onGoodAnswered: () => void;
//   onBadAnswered: () => void;
// };

// const goodEmoji = [
//   "😊",
//   "🤓",
//   "😃",
//   "🤩",
//   "🥳",
//   "👍",
//   "👏",
//   "💪",
//   "😍",
//   "😁",
//   "🤠"
// ];
// const badEmoji = [
//   "😆",
//   "🤣",
//   "🤐",
//   "🙄",
//   "🤢",
//   "😵",
//   "☹",
//   "😰",
//   "😭",
//   "😖",
//   "😱",
//   "🤬",
//   "👎"
// ];

// // kanaList is an array of pairs kana <-> romaji
// // example: [["あ", "a"], ["い", "i"] ...]
// // kana is the kana that the user needs to translate
// // example: "あ"
// function Question({
//   kanaList,
//   kana,
//   goodAnswer,
//   onGoodAnswered,
//   onBadAnswered
// }: Props) {
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [exist, setExist] = useState(true);
//   const [inputValue, setInputValue] = useState("");
//   const [isAnswered, setIsAnswered] = useState(false);

//   const good = [...goodEmoji][
//     Math.floor(Math.random() * [...goodEmoji].length)
//   ];
//   const bad = [...badEmoji][Math.floor(Math.random() * [...badEmoji].length)];

//   useEffect(clear, [kana]);

//   function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
//     const userKana = findKana(kanaList, e.target.value);
//     setInputValue(e.target.value);
//     console.log(userKana, isAnswered, !isCorrect);
//     // si il existe
//     if (userKana) {
//       console.log("test");
//       setIsAnswered(true);
//       setExist(true);
//       setIsCorrect(userKana === kana);
//       if (userKana === kana) {
//         onGoodAnswered();
//       }
//     } else {
//       setExist(false);
//     }
//   }

//   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     console.log(inputValue);
//     if (isAnswered === true) {
//       if (!isCorrect) {
//         onBadAnswered();
//         clear();
//       } else {
//         // Prevent the kana to change on click when good answer
//         setTimeout(() => clear(), 1000);
//       }
//     }
//   }

//   function clear() {
//     setIsAnswered(false);
//     setIsCorrect(false);
//     setInputValue("");
//   }

//   return (
//     <div className="pt-12 text-center">
//       <div
//         className={classNames(
//           "border-2 border-gray-400 rounded p-2 mb-6 inline-block text-6xl w-32 m-2 ",
//           {
//             "border-green-400": isAnswered && isCorrect,
//             "border-red-400": isAnswered && !isCorrect
//           }
//         )}
//       >
//         {kana}
//       </div>
//       <form action="#" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           className={classNames(
//             "border border-gray-400 rounded-md mb-4 px-2 py-1 uppercase text-center w-24 text-xl",
//             {
//               "border-green-800 bg-green-200 text-green-800":
//                 isAnswered && isCorrect,
//               "border-red-800 bg-red-200 text-red-800": isAnswered && !isCorrect
//             }
//           )}
//           minLength={1}
//           maxLength={4}
//           size={4}
//           spellCheck={false}
//           autoCapitalize="none"
//           autoCorrect="off"
//           autoComplete="off"
//           onChange={handleChange}
//           aria-label="questionInput"
//           value={inputValue}
//         />
//         <div data-testid="status" className="text-xl">
//           {isAnswered && exist ? (
//             isCorrect ? (
//               <div data-testid="good">{good}</div>
//             ) : (
//               <div data-testid="bad">{bad}</div>
//             )
//           ) : (
//             ""
//           )}{" "}
//         </div>
//         {isAnswered && !isCorrect ? (
//           <>
//             <p className="text-gray-600">
//               Good answer :{" "}
//               <span className="uppercase font-bold">{goodAnswer}</span>
//             </p>
//             <p className="text-gray-600">
//               <span className="uppercase">{inputValue}</span> ={" "}
//               {findKana(kanaList, inputValue)} / press enter to continue...
//             </p>
//           </>
//         ) : (
//           ""
//         )}
//       </form>
//     </div>
//   );
// }

// export default Question;
