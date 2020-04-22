import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Home() {
  return (
    <nav className="wrapper">
      <Link to="/hiragana">
        <button className="course">Hiragana ひらがな</button>
      </Link>
      <Link to="/katakana">
        <button className="course">Katakana カタカナ</button>
      </Link>
      <Link to="/revision">
        <button className="course">Revision</button>
      </Link>
    </nav>
  );
}
