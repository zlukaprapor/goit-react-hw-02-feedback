import React from 'react';

class FeedbackOptions extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  hendleGood = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  hendleNeutral = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  hendleBad = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total ? ((this.state.good * 100) / total).toFixed(0) : 0;
  };

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
            <li>Total:{this.countTotalFeedback()}</li>
            <li>Positive feedback:{this.countPositiveFeedbackPercentage()}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FeedbackOptions;
