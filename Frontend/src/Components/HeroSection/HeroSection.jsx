import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="Hero-Section-wrapper">
      <div className="hero-full-content">
        <div className="Hero-Section-content">
          <h2 className="Hero-Section-subheading">We’re Here to Stand by You – From Consultation to Verdict</h2>
          <h1 className="Hero-Section-heading">Your Trusted Legal Partner</h1>
          <p className="Hero-Section-description">
            At Lawer Point, we provide a one-stop solution for all your legal needs — whether you're seeking professional representation, drafting legal agreements, or managing ongoing cases. Our platform connects you with experienced lawyers across all practice areas to ensure you get the guidance and justice you deserve.
            <br />
            We simplify the legal process so you can focus on what matters most — getting justice. Let our team of professionals take care of the rest
          </p>
        </div>
        <div className="Hero-Section-form-container">
          <h2 className="Hero-Section-form-title">Free Consultation</h2>
          <form className="Hero-Section-form">
            <div className="Hero-Section-form-group">
              <input type="text" placeholder="Your Name*" className="Hero-Section-input" />
              <select className="Hero-Section-select">
                <option value="">Practice Areas</option>
                {/* Add options here */}
              </select>
            </div>
            <div className="Hero-Section-form-group">
              <input type="email" placeholder="Email*" className="Hero-Section-input" />
              <input type="tel" placeholder="Phone Number*" className="Hero-Section-input" />
            </div>
            <textarea placeholder="Case Detail*" className="Hero-Section-textarea"></textarea>
            <button type="submit" className="Hero-Section-button">SEND YOUR CASE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;