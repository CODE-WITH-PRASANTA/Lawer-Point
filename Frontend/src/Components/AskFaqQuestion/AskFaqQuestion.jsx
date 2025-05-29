import React from 'react';
import './AskFaqQuestion.css';
import bg from '../../assets/consult-form-bg.webp';

const AskFaqQuestion = () => {
  return (
    <div
      className="ask-faq-container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="ask-faq-wrapper">
        <h2 className="ask-faq-title">Ask Your Questions Now</h2>
        <p className="ask-faq-subtitle">
          Need help or clarification? Drop your question and we’ll respond promptly.
        </p>
        <div className="ask-faq-input-row">
          <input type="text" placeholder="Your Name" className="ask-faq-input" />
          <input type="email" placeholder="Email Address" className="ask-faq-input" />
        </div>
        <textarea
          placeholder="Your Question..."
          className="ask-faq-textarea"
        />
        <button className="ask-faq-button">ASK YOUR QUESTION</button>
      </div>
    </div>
  );
};

export default AskFaqQuestion;
