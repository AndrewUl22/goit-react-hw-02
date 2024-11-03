import css from './Feedback.module.css';
import React from 'react'


const Feedback = ({ valueFeedBack, totalFeedback, positiveFeedback }) => {

  return (
    <ul className={css.feedback_stats_wrapper}>
      <li className={css.feedback_stats}>Good: <span>{valueFeedBack.good }</span></li>
      <li className={css.feedback_stats}>Neutral: <span>{valueFeedBack.neutral }</span></li>
      <li className={css.feedback_stats}>Bad: <span>{valueFeedBack.bad}</span></li>
      <li className={css.feedback_stats}>Total: <span>{ totalFeedback }</span></li>
      <li className={css.feedback_stats}>Positive: <span>{positiveFeedback  }% </span></li>
    </ul>
  )
};

export default Feedback

