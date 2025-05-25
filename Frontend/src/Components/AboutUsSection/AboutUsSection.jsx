import React from 'react';
import './AboutUsSection.css';

// Assets
import Aboutusrightsec from '../../assets/box-bg-image1.webp';
import signature from '../../assets/signature.webp';

const AboutUsSection = () => {
  return (
    <div className="full-about-wrapper">
    <div className="about-wrapper">
      <div className="about-left">
        <h2 className="about-title">About Us</h2>
        <h1 className="about-subtitle">
          We are here to fight against any violence with <span>experience</span>
        </h1>
        <p className="about-desc">
          Instead of focusing on content review, we emphasize clean design for clarity and impact. Real content tends to distract during the creative process.
        </p>
        <p className="about-desc">
          Our team ensures every project is handled with dedication, accuracy, and professionalism to bring long-term value and trust.
        </p>
        <ul className="about-list">
          <li><span>✓</span> Seamless legal consultancy</li>
          <li><span>✓</span> Transparent & ethical practices</li>
          <li><span>✓</span> Reliable and timely response</li>
          <li><span>✓</span> Personalized client support</li>
        </ul>
        <p className="about-contact">
          Call for inquiries: <span>540-325-1523</span> or <span>540-328-1265</span>
        </p>
        <div className="about-founder">
          <img src={signature} alt="Signature" className="about-signature" />
          <p className="about-founder-name">Uday Jyoshi</p>
          <p className="about-founder-title">(Chairman & Founder)</p>
        </div>
      </div>
      <div className="about-right">
        <div className="about-image-container">
          <img src={Aboutusrightsec} alt="About Us" className="about-image" />
          <div className="about-experience-box">
            <span className="about-experience-number">35+</span>
            <p className="about-experience-text">Years of Excellence</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUsSection;
