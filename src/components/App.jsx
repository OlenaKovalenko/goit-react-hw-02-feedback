import { Component } from "react";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateGoodClicks = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  updateNeutralClicks = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  updateBadClicks = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };


  render() {
    const { good, neutral, bad } = this.state;
    // console.log(good);

    return (
      <section>
        <h1>Please leave feedback</h1>
        <div>
          <button onClick={ this.updateGoodClicks}>Good</button>
          <button onClick={ this.updateNeutralClicks}>Neutral</button>
          <button onClick={ this.updateBadClicks}>Bad</button>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
        </div>
      </section>
    )
  }
}
