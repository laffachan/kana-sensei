import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Revision from "./Revision";
import Practice from "./Practice";
import { hiragana, katakana } from "./kana";
import Home from "./Home";
import ReactModal from "react-modal";
import Modal from "react-modal";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  Modal.setAppElement("#root");

  function handleOpenModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <Router>
      <div
        className="relative mx-auto flex flex-col min-h-screen divide-y divide-gray-400"
        style={{ minHeight: "-webkit-fill-available" }}
      >
        <div className="flex-grow">
          <div className="container mx-auto flex p-4 justify-between border-b bg-teal-100">

            <Link to="/">
              <div>
                <span role="img" aria-label="">
                  ⛩️
                </span>{" "}
                KANA Practice
              </div>
            </Link>
            <div>
              <span role="img" aria-label="">
                📔
              </span>{" "}
              <button onClick={handleOpenModal}>Kana List</button>
              <ReactModal
                isOpen={showModal}
                contentLabel="Revision"
                onRequestClose={handleCloseModal}
              >
                <div>
                  <Revision handleClose={handleCloseModal} />
                </div>
              </ReactModal>
            </div>
          </div>
          <Switch>
            <Route path="/hiragana">
              <Practice data={hiragana} />
            </Route>
            <Route path="/katakana">
              <Practice data={katakana} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
