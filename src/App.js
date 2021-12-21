import React from 'react';
import Statistics from './component/feedback/Statistics';
import FeedbackOptions from './component/feedback/FeedbackOptions';
import Notification from './component/feedback/Notification';
import Section from './component/feedback/Section';
class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = (value) => {
    switch (value) {
      case 'good':
        this.setState({ good: this.state.good + 1 });
        break;
      case 'neutral':
        this.setState({ neutral: this.state.neutral + 1 });
        break;
      case 'bad':
        this.setState({ bad: this.state.bad + 1 });
        break;
      default:
    }
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total ? ((this.state.good * 100) / total).toFixed(0) : 0;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.countFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
export default App;
