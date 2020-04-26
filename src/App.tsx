import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Exercice from "./Exercice";
import Revision from "./Revision";
import { hiragana, katakana } from "./kana";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col -min-h-screen divide-y divide-gray-400 ">
        <div className="container mx-auto flex p-4 justify-between ">
          <Link to="/">
            <div>Kana-app</div>
          </Link>
          <Link to="/revision">
            <div>Revision</div>
          </Link>
        </div>
        <Switch>
          <Route path="/hiragana">
            <Exercice data={hiragana} />
          </Route>
          <Route path="/katakana">
            <Exercice data={katakana} />
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
