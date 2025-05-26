import React from 'react';
import './AboutAchievements.css';
import { FaShieldAlt, FaGavel, FaAward } from 'react-icons/fa';

const AboutAchievements = () => {
  return (
    <section className="about-achievement-section">
      <div className="about-achievement-container">
        <div className="about-achievement-box">
          <div className="about-achievement-icon-wrapper">
            <FaShieldAlt className="about-achievement-icon" />
          </div>
          <h3 className="about-achievement-title">Experienced Legal Consultants</h3>
          <p className="about-achievement-desc">
            Our dedicated team of attorneys specializes in drafting, litigation, and full-spectrum legal advisory services. We ensure precision, protection, and peace of mind for our clients across civil, criminal, corporate, and constitutional matters.
          </p>
        </div>

        <div className="about-achievement-box">
          <div className="about-achievement-icon-wrapper">
            <FaGavel className="about-achievement-icon" />
          </div>
          <h3 className="about-achievement-title">Over Two Decades of Excellence</h3>
          <p className="about-achievement-desc">
            With 20+ years of legal expertise, we’ve handled complex litigation, high-stakes negotiations, and regulatory compliance for individuals, corporates, and institutions nationwide.
          </p>
        </div>

        <div className="about-achievement-box">
          <div className="about-achievement-icon-wrapper">
            <FaAward className="about-achievement-icon" />
          </div>
          <h3 className="about-achievement-title">Recognized for Legal Excellence</h3>
          <p className="about-achievement-desc">
            Honored with multiple national awards for ethical advocacy and case success. Our firm is known for outstanding performance in legal drafting, advisory, and courtroom representation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutAchievements;
