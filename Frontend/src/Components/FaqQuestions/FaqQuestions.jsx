import React, { useState } from 'react';
import './FaqQuestions.css';
import { FaGavel } from 'react-icons/fa';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqData = {
  'Law & Justice': [
    "What is the International Court of Justice?",
    "Who may submit cases to the Court?",
    "Why are some disputes between States not considered by the Court?",
    "Are decisions of the Court binding?",
    "How does one attend hearings of the Court?",
    "Is it possible to visit the Peace Palace, seat of the Court?",
    "How does one apply for a job at the Court?",
    "Is this the best major for me if I want to work in law enforcement?",
    "Are the consolidated Acts and regulations the official versions?",
    "Where can I find more information or assistance?"
  ],
  'Criminal Law': [],
  'Family Law': [],
  'Consumer Law': [],
  'Business Law': []
};

const FaqQuestions = () => {
  const [activeTab, setActiveTab] = useState('Law & Justice');
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="Faq-Question-Container">
      <div className="Faq-Question-Tabs">
        {Object.keys(faqData).map((category) => (
          <button
            key={category}
            className={`Faq-Question-Tab ${activeTab === category ? 'active' : ''}`}
            onClick={() => {
              setActiveTab(category);
              setOpenIndex(null);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="Faq-Question-List">
        {faqData[activeTab].length > 0 ? (
          faqData[activeTab].map((question, index) => (
            <div className="Faq-Question-Item" key={index}>
              <div className="Faq-Question-Header" onClick={() => handleToggle(index)}>
                <div className="Faq-Question-Icon"><FaGavel /></div>
                <div className="Faq-Question-Title">{question}</div>
                <div className="Faq-Question-ToggleIcon">
                  {openIndex === index ? <FiMinus /> : <FiPlus />}
                </div>
              </div>
              <div
                className={`Faq-Question-Answer ${openIndex === index ? 'open' : ''}`}
              >
                <p>This is a sample answer for the selected question. You can add real content here.</p>
              </div>
            </div>
          ))
        ) : (
          <p className="Faq-Question-NoFaq">No FAQs available under "{activeTab}".</p>
        )}
      </div>
    </div>
  );
};

export default FaqQuestions;
