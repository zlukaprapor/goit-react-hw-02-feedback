import React from "react";

class FeedbackOptions extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendleGood = () => {
    this.setState((prevState) => {
      console.log(prevState);
      return {
        good: prevState.good + 1,
      };
    });
  };
  hendleNeutral = () => {};
  hendleBad = () => {};
  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button type="button" onClick={this.hendleGood}>
            Good
          </button>
          <button type="button" onClick={this.hendleNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.hendleBad}>
            Bad
          </button>
        </div>
        <div>
          <h2>Statistics</h2>
          <ul>
            {/* <li>No feedback given:</li> */}
            <li>Good:{this.state.good}</li>
            <li>Neutral:{this.state.neutral}</li>
            <li>Bad:{this.state.bad}</li>
            <li>Total:</li>
            <li>Positive feedback:</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FeedbackOptions;
