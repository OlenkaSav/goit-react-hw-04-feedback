// import React, { Component } from 'react';
import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistic from './Statistic';
import Notification from './Notification';
import Section from './Section';

function Interface() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = event => {
    const index = event.target.name;
    switch (index) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutal => prevNeutal + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const persentage = Math.floor((good * 100) / countTotalFeedback());
    return persentage;
  };

  const options = ['good', 'neutral', 'bad'];

  return (
    <>
      <Section title={'Leave your feedback please'}>
        <FeedbackOptions options={options} onLeaveFeedback={handleIncrement} />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
}

export default Interface;
