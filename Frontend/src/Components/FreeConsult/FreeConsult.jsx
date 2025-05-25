import React from 'react';
import './FreeConsult.css';
import bg from '../../assets/contact_consult.webp';

const FreeConsult = () => {
  return (
    <section className="Free-Consultant-section">
      <div className="Free-Consultant-container">
        <div className="Free-Consultant-wrapper">
          <div className="Free-Consultant-form">
            <h2 className="Free-Consultant-title">FREE CONSULTATION</h2>
            <p className="Free-Consultant-description">
              Law is complicated matter. It can cause you a big problem. Let us help you! Omnis iste natus sit voluptatem accusanti doloremque laudantium totam.
            </p>
            <form className="Free-Consultant-form-element">
              <div className="Free-Consultant-form-row">
                <input type="text" placeholder="Your Name*" required className="Free-Consultant-input" />
                <select required className="Free-Consultant-select">
                  <option value="">Practice Areas</option>
                  <option value="civil">Civil</option>
                  <option value="criminal">Criminal</option>
                  <option value="corporate">Corporate</option>
                </select>
              </div>
              <div className="Free-Consultant-form-row">
                <input type="email" placeholder="Email*" required className="Free-Consultant-input" />
                <input type="tel" placeholder="Phone Number*" required maxLength={10} className="Free-Consultant-input" />
              </div>
              <textarea
                placeholder="Case Detail*"
                rows="4"
                required
                className="Free-Consultant-textarea"
              ></textarea>
              <button type="submit" className="Free-Consultant-submit-btn">SEND YOUR CASE</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeConsult;
