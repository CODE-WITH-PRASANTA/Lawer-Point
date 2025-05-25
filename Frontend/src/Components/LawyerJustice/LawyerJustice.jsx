import React from 'react';
import './LawyerJustice.css';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import LeftStatchueimg from '../../assets/h1-statue-img-left.webp';

const LawyerJustice = () => {
  return (
    <div className="lawyer-justice-container">
      <div className="lawyer-justice-content">
        <div className="lawyer-justice-left">
          <img src={LeftStatchueimg} alt="Justice Statue" className="lawyer-justice-image" />
        </div>

        <div className="lawyer-justice-right">
          <p className="lawyer-justice-subtitle">Dedicated Legal Expertise</p>
          <h1 className="lawyer-justice-title">
            Comprehensive Legal Services. <span className="lawyer-justice-highlight">Justice Delivered</span>.
          </h1>
          <p className="lawyer-justice-description">
            <strong>Lawer Point</strong> is your trusted partner for legal drafting, litigation, and advisory services. We specialize in <span className="lawyer-justice-colored">civil, criminal, corporate, and family law</span>, offering unmatched representation in courts across the region. Reach out today at 
            <span className="lawyer-justice-light"> 000 - 123 - 456789</span> for professional counsel and legal clarity. Our team ensures <span className="lawyer-justice-colored-light">compliance, confidentiality, and client satisfaction</span> in every case.
          </p>

          <div className="lawyer-justice-points">
            <ul>
              <li><FaStar className="lawyer-justice-icon" /> Legal Drafting & Documentation</li>
              <li><FaStar className="lawyer-justice-icon" /> Civil & Criminal Litigation</li>
              <li><FaStar className="lawyer-justice-icon" /> Corporate and Contract Law</li>
              <li><FaStar className="lawyer-justice-icon" /> Divorce & Family Disputes</li>
              <li><FaStar className="lawyer-justice-icon" /> Property and Land Law</li>
            </ul>
            <ul>
              <li><FaStar className="lawyer-justice-icon" /> Consumer Protection Cases</li>
              <li><FaStar className="lawyer-justice-icon" /> Cheque Bounce & Recovery Matters</li>
              <li><FaStar className="lawyer-justice-icon" /> Bail Applications & FIR Quash</li>
              <li><FaStar className="lawyer-justice-icon" /> Employment & Labour Law</li>
              <li><FaStar className="lawyer-justice-icon" /> Legal Notices & Compliance</li>
            </ul>
          </div>

          <button className="lawyer-justice-btn">
            GET CONSULTATION <FaArrowRight className="lawyer-justice-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LawyerJustice;
