import React from 'react';
import './FaqPage.css';
import FaqQuestions from '../../Components/FaqQuestions/FaqQuestions';
import AskFaqQuestion from '../../Components/AskFaqQuestion/AskFaqQuestion';

const FaqPage = () => {
  return (
    <div>
      <div className="Faq-Section">
        <div className="Faq-Overlay">
          <h1 className="Faq-Heading">Frequently Asked Questions</h1>
          <p className="Faq-Subheading">
            Find answers to all your queries regarding legal drafting, agreements, consultations, and laws. Our legal experts provide clear, professional solutions to help you understand your rights and obligations.
          </p>
        </div>
        <div className="Faq-Breadcrumb">
          <span className="Faq-BreadcrumbItem">Home</span>
          <span className="Faq-Separator">»</span>
          <span className="Faq-BreadcrumbItem">FAQ</span>
        </div>
      </div>
      <FaqQuestions />
      <AskFaqQuestion />
    </div>
  );
};

export default FaqPage;
