import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pt-20 flex flex-1 flex-col items-center leading-relaxed text-4xl sm:text-5xl">
      Practice
      <Link to="/hiragana" className="underline">
        Hiragana ひらがな
      </Link>
      <p>or</p>
      <Link to="/katakana" className="underline">
        Katakana カタカナ
      </Link>
      <footer className="container mx-auto w-full text-right p-4 text-sm absolute bottom-0 border-t bg-teal-100">
        <div>
          <a href="https://github.com/laffachan/kana-app">By Laffachan</a>
        </div>
      </footer>
    </div>
  );
}
