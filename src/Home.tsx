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
      <div className="border-2 text-sm italic mt-16 m-8 p-2">
        <p className="font-bold">How does it work ?</p>
        <p>- Select the kanas you want to practice</p>
        <p>- Find and write the matching romaji <span role="img" aria-label="writing-hand">✍️</span></p>
      </div>
      <footer className="text-right w-screen p-4 text-sm absolute bottom-0 border-t bg-teal-100">
        <div className="lg:mx-40 xl:mx-64">
          <a href="https://github.com/laffachan/kana-app">By Laffachan</a>
        </div>
      </footer>
    </div>
  );
}
