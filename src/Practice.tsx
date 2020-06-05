import React, { useState } from "react";
import Question from "./Question";
import ReactModal from "react-modal";
import Modal from "react-modal";

type Props = {
  data: string[][];
};

function getRandomKana(data: string[][]): string[] | (() => string[]) {
  return data[Math.floor(Math.random() * data.length)];
}

function Practice({ data }: Props) {
  let timerId: number;
  const [randomKana, setRandomKana] = useState(getRandomKana(data));
  const [showModal, setShowModal] = useState(true);

  Modal.setAppElement("#root");

  function toggleModal() {
    setShowModal(false);
  }

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

/*<ReactModal
        isOpen={showModal}
        contentLabel="modal"
        onRequestClose={toggleModal}
        className="flex flex-col items-center text-xl bg-gray-300 bg-opacity-50 h-full"
      >
        <h2 className="pb-2 pt-32 font-bold">Write the kana in romaji !</h2>
        <button
          className="mt-24 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleModal}
        >
          OK
        </button>
      </ReactModal>*/