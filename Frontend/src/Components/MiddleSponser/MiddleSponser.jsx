import React from 'react';
import './MiddleSponser.css';

const MiddleSponser = () => {
  return (
    <div className="Middle-sponser-wrapper">
      <div className="Middle-sponser-overlay" />
      <div className="Middle-sponser-content">
        <h2 className="Middle-sponser-heading">20 Years Of Experience In Various Cases</h2>
        <p className="Middle-sponser-description">
          We understand the needs for professionalism, privacy and confidentiality in both our relationship with our customers as well as your clients.
          We do nothing to prejudice that relationship. Think of us as your attorney on demand.
        </p>
        <button className="Middle-sponser-button">CONTACT US NOW</button>
      </div>
    </div>
  );
};

export default MiddleSponser;
