import { Component } from "react";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  render() {
    return (
      <section>
        <h1>Please leave feedback</h1>
        <div>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>Good: </p>
          <p>Neutral: </p>
          <p>Bad: </p>
        </div>
      </section>
    )
  }
}
