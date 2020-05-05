import React, { useState } from "react";
import Question from "./Question";

type Props = {
  data: string[][];
};

function Practice({ data }: Props) {
  const [randomKana, setRandomKana] = useState(
    data[Math.floor(Math.random() * data.length)]
  );

  return (
    <div className="pt-12 text-center">
      <Question kanaList={data} kana={randomKana[0]} setKana={setRandomKana} />
    </div>
  );
}

export default Practice;
