import React from 'react';
import './HomePlanPricing.css';

const plans = [
  {
    title: 'BASIC',
    price: '200',
    features: [
      'Standard Legal Format',
      'Quick Draft Preparation',
      'WhatsApp & Email Delivery',
    ],
    disabled: [
      'Lawyer Verification',
      'Custom Clause Addition',
      'Hard Copy Delivery',
    ],
    type: 'basic',
  },
  {
    title: 'MEDIUM',
    price: '300',
    features: [
      'Standard Legal Format',
      'Quick Draft Preparation',
      'WhatsApp & Email Delivery',
      'Lawyer Verification',
      'Custom Clause Addition',
    ],
    disabled: ['Hard Copy Delivery'],
    type: 'medium',
    highlighted: true,
  },
  {
    title: 'ADVANCE',
    price: '500',
    features: [
      'Standard Legal Format',
      'Quick Draft Preparation',
      'WhatsApp & Email Delivery',
      'Lawyer Verification',
      'Custom Clause Addition',
      'Hard Copy Delivery (Courier)',
    ],
    disabled: [],
    type: 'advance',
  },
];

const HomePlanPricing = () => {
  return (
    <section className="HomePlan-section">
      <h2 className="HomePlan-heading">Legal Draft Pricing</h2>
      <p className="HomePlan-description">
        Choose a legal draft package that best suits your document requirements. Whether it's a  ( Rent agreement, Affidavit, Sale deed, or Partnership deed ) — we've got you covered with verified and professional formats.
      </p>

      <div className="HomePlan-cards-wrapper">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`HomePlan-card ${plan.highlighted ? 'highlighted' : ''}`}
          >
            <h3 className="HomePlan-card-title">{plan.title}</h3>
            <div className="HomePlan-card-price">
              <span>₹</span>{plan.price}
              <div className="per-month">/ Once</div>
            </div>
            <ul className="HomePlan-card-features">
              {plan.features.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
              {plan.disabled.map((item, idx) => (
                <li key={`d-${idx}`} className="disabled">{item}</li>
              ))}
            </ul>
            <button className={`HomePlan-btn ${plan.type}`}>Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePlanPricing;
