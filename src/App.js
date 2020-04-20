import React from "react";
import "./styles.css";
import Exercice from "./exercice";
import Revision from "./revision";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showExercice: false,
      showHomepage: true,
      showReview: false
    };

    this.handleReview = this.handleReview.bind(this);
    this.handleHomepage = this.handleHomepage.bind(this);
    this.handleExercice = this.handleExercice.bind(this);
  }

  handleExercice() {
    this.setState({
      showExercice: true,
      showReview: false,
      showHomepage: false
    });
  }

  handleReview() {
    this.setState({
      showExercice: false,
      showReview: true,
      showHomepage: false
    });
  }

  handleHiragana() {
    this.setState({
      showExercice: false,
      showReview: false,
      showHomepage: false
    });
  }

  handleKatakana() {
    this.setState({
      showExercice: false,
      showReview: false,
      showHomepage: false
    });
  }

  handleHomepage() {
    this.setState({
      showExercice: false,
      showReview: false,
      showHomepage: true
    });
  }

  render() {
    const Homepage = props => {
      return (
        <div className="wrapper">
          <h2>What do you want to study today ?</h2>
          <button className="course" onClick={this.handleExercice}>
            <div>Exercice</div>
            <p>Hiragana ひらがな</p>
            <p>Katakana カタカナ</p>
          </button>
          <button className="course" onClick={this.handleReview}>
            Revision
          </button>
        </div>
      );
    };

    let display;
    if (this.state.showHomepage === true) {
      display = <Homepage />;
    } else if (this.state.showReview === true) {
      display = <Revision />;
    } else if (this.state.showExercice === true) {
      display = <Exercice />;
    }

    return (
      <div className="app">
        <h1 className="home" onClick={this.handleHomepage}>
          Kana-app
        </h1>
        <div>{display}</div>
      </div>
    );
  }
}

export default App;
