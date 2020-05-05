import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pt-20 flex flex-1 flex-col items-center leading-relaxed text-4xl sm:text-6xl">
      Practice
      <Link to="/hiragana" className="underline">
        Hiragana ひらがな
      </Link>
      <p>or</p>
      <Link to="/katakana" className="underline">
        Katakana カタカナ
      </Link>
      <Link to="/questions hiragana" className="underline">
        Questions hiragana
      </Link>
      <Link to="/questions katakana" className="underline">
        Questions katakana
      </Link>
    </div>
  );
}
