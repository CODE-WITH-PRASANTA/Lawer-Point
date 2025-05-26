import React from 'react';
import './AboutBestLawer.css';
import { FaGavel, FaFileAlt, FaHandshake, FaStar } from 'react-icons/fa';

const AboutBestLawer = () => {
  return (
    <section className="About-bestlawer-section">
      <div className="About-bestlawer-container">
        <div className="About-bestlawer-left"></div>

        <div className="About-bestlawer-right">
          <p className="About-bestlawer-tagline">YOUR TRUSTED LEGAL PARTNER</p>
          <h2 className="About-bestlawer-heading">
            Comprehensive Legal Solutions <br /> Tailored For You
          </h2>
          <p className="About-bestlawer-description">
            At <span className="About-bestlawer-highlight">LawerPoint.com</span>, we offer expert legal consultancy services across all branches of law including civil, criminal, corporate, family, property, and intellectual property law. Our experienced legal professionals are dedicated to providing personalized solutions that meet your unique needs. We specialize in handling all types of legal drafts, contracts, agreements, and documentation with precision and care.
            <br /><br />
            Whether you need guidance on litigation, legal drafting, or regulatory compliance, our team ensures clarity, efficiency, and protection of your rights at every step. Connect with us today for a confidential consultation and let us help you navigate the complexities of law with confidence. Call us now at <a href="tel:016540066456" className="About-bestlawer-phone">016540.066.456</a> to schedule your appointment.
          </p>
          <ul className="About-bestlawer-features">
            <li className="About-bestlawer-feature-item">Expert legal advice across all practice areas</li>
            <li className="About-bestlawer-feature-item">Accurate and timely legal drafting & documentation</li>
            <li className="About-bestlawer-feature-item">Client-focused approach with transparent communication</li>
          </ul>
        </div>
      </div>

      <div className="About-bestlawer-stats">
        <div className="About-bestlawer-stat-box">
          <FaGavel className="About-bestlawer-stat-icon" />
          <h3 className="About-bestlawer-stat-number">25+</h3>
          <p className="About-bestlawer-stat-label">Years of Legal Excellence</p>
        </div>
        <div className="About-bestlawer-stat-box">
          <FaFileAlt className="About-bestlawer-stat-icon" />
          <h3 className="About-bestlawer-stat-number">850+</h3>
          <p className="About-bestlawer-stat-label">Successful Cases Handled</p>
        </div>
        <div className="About-bestlawer-stat-box">
          <FaHandshake className="About-bestlawer-stat-icon" />
          <h3 className="About-bestlawer-stat-number">50+</h3>
          <p className="About-bestlawer-stat-label">Expert Legal Consultants</p>
        </div>
        <div className="About-bestlawer-stat-box">
          <FaStar className="About-bestlawer-stat-icon" />
          <h3 className="About-bestlawer-stat-number">2000+</h3>
          <p className="About-bestlawer-stat-label">Satisfied Clients Served</p>
        </div>
      </div>
    </section>
  );
};

export default AboutBestLawer;
