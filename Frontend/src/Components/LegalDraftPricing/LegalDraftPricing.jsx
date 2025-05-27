import React from 'react';
import './LegalDraftPricing.css';

const LegalDraftPricing = () => {
  return (
    <section className="LegalDraft-pricing-section">
      <p className="LegalDraft-pricing-title">Price Plan</p>
      <h2 className="LegalDraft-pricing-heading">Customized Plans Just For You</h2>

      <div className="LegalDraft-pricing-cards">

        {/* Basic Drafting Plan */}
        <div className="LegalDraft-pricing-card">
          <h3>Basic Draft Plan</h3>
          <p className="LegalDraft-pricing-description">
            Ideal for simple legal agreements and declarations.
          </p>
          <div className="LegalDraft-pricing-cost">
            <span className="dollar">₹</span>
            <span className="amount">500</span>
            <span className="period">/ Draft</span>
          </div>
          <button className="LegalDraft-pricing-button">Get Started →</button>
          <ul className="LegalDraft-pricing-features">
            <li>Rent Agreement</li>
            <li>Affidavit or Declaration Draft</li>
            <li>NOC Certificate Drafting</li>
            <li className="disabled">Partnership or MoU Drafting</li>
          </ul>
        </div>

        {/* Professional Drafting Plan */}
        <div className="LegalDraft-pricing-card LegalDraft-pricing-highlight">
          <h3>Professional Draft Plan</h3>
          <p className="LegalDraft-pricing-description">
            Suitable for more detailed agreements and commercial use.
          </p>
          <div className="LegalDraft-pricing-cost">
            <span className="dollar">₹</span>
            <span className="amount">600</span>
            <span className="period">/ Draft</span>
          </div>
          <button className="LegalDraft-pricing-button gold">Get Started →</button>
          <ul className="LegalDraft-pricing-features">
            <li>Partnership Agreement Draft</li>
            <li>Consultancy Agreement</li>
            <li>Power of Attorney</li>
            <li>One round of revision included</li>
          </ul>
        </div>

        {/* Premium Drafting Plan */}
        <div className="LegalDraft-pricing-card">
          <h3>Premium Draft Plan</h3>
          <p className="LegalDraft-pricing-description">
            Best for companies, startups & businesses requiring robust legal drafting.
          </p>
          <div className="LegalDraft-pricing-cost">
            <span className="dollar">₹</span>
            <span className="amount">700</span>
            <span className="period">/ Draft</span>
          </div>
          <button className="LegalDraft-pricing-button">Get Started →</button>
          <ul className="LegalDraft-pricing-features">
            <li>MoU (Memorandum of Understanding)</li>
            <li>Service Level Agreements (SLA)</li>
            <li>Employment or Freelancer Agreement</li>
            <li>Two rounds of revision + Legal advice</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default LegalDraftPricing;
