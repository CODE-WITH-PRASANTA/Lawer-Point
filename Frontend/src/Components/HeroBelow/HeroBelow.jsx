import React from 'react';
import './HeroBelow.css';
import { FaShieldAlt, FaLock, FaHeadset } from 'react-icons/fa';

const HeroBelow = () => {
  return (
    <div className="hero-below-wrapper">
      <div className="hero-below-container">
        <div className="hero-below-card">
          <div className="hero-below-icon">
            <FaShieldAlt />
          </div>
          <div className="hero-below-content">
            <h2 className="hero-below-title">99% Winning Guarantee</h2>
            <p className="hero-below-text">
              Full range of shipping disputes such as charterparty disputes, demurrage claims and claims.
            </p>
          </div>
        </div>
        <div className="hero-below-card hero-below-active">
          <div className="hero-below-icon">
            <FaLock />
          </div>
          <div className="hero-below-content">
            <h2 className="hero-below-title">Secure Management</h2>
            <p className="hero-below-text">
              Full gamut of disputes arising from sale and purchase agreements, trade finance and carriage.
            </p>
          </div>
        </div>
        <div className="hero-below-card">
          <div className="hero-below-icon">
            <FaHeadset />
          </div>
          <div className="hero-below-content">
            <h2 className="hero-below-title">Full Time Support</h2>
            <p className="hero-below-text">
              Experienced counsel in ad-hoc and institutional arbitration in legal hubs like Singapore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBelow;
