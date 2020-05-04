import React from "react";
import QuoteCard from "./components/QuoteCard";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "Oh Yeah!",
      character: "Duffman",
      image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FDuffman.png?1497567511709",
    };
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote() {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          quote: data[0].quote,
          character: data[0].character,
          image: data[0].image,
        });
      });
  }
  render() {
    return (
      <div className="App">
        <QuoteCard
          quote={this.state.quote}
          image={this.state.image}
          character={this.state.character}
        />
        <button type="button" onClick={this.getQuote}>
          Get a new Simpsons Quote !{" "}
        </button>
      </div>
    );
  }
}

export default App;
