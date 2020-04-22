import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";
import Katakana from "./Katakana";
import Hiragana from "./Hiragana";
import Revision from "./Revision";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Link to="/">Kana-app</Link>
        <Switch>
          <Route path="/hiragana">
            <Hiragana />
          </Route>
          <Route path="/katakana">
            <Katakana />
          </Route>
          <Route path="/revision">
            <Revision />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
