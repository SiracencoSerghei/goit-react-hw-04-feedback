import React, { useState } from "react";
import PropTypes from "prop-types";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";

const Feedback = ({ title = "Please leave feedback", options = ["good", "neutral", "bad"] }) => {
const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

const handleFeedback = (option) => {
setFeedback((prevState) => ({ ...prevState, [option]: prevState[option] + 1 }));
};

const countTotalFeedback = () => {
const { good, neutral, bad } = feedback;
return good + neutral + bad;
};

const countPositiveFeedbackPercentage = () => {
const { good } = feedback;
const total = countTotalFeedback();
// return total ? Math.round((good / total) * 100) : 0;
return total && Math.round((good / total) * 100);
};

const {good, neutral, bad} = feedback;
const totalFeedback = countTotalFeedback();
const positivePercentage = countPositiveFeedbackPercentage();

return (
<div>
<Section title={title}>
<FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
</Section>
  {totalFeedback > 0 ? (
    <Section title="Statistics">
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={totalFeedback}
        positivePercentage={positivePercentage}
      />
    </Section>
  ) : (
    <Notification message="There is no feedback" />
  )}
</div>

);
};

Feedback.propTypes = {
title: PropTypes.string,
options: PropTypes.arrayOf(PropTypes.string),
};

export default Feedback;