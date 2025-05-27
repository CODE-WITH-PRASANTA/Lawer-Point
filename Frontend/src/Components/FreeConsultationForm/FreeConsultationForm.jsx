import React from 'react'
import './FreeConsultationForm.css'

import img from '../../assets/man-image.webp'


const FreeConsultationForm = () => {
  return (
    <div>
   <section className="free-consultation-section">
      <div className="free-consultation-content">
        <div className="free-consultation-image">
          <img
            src={img}
            alt="Lawyer Consultation"
          />
        </div>
        <div className="free-consultation-form">
          <h2>Get a Free Consultation</h2>
          <span className="highlight"></span>
          <form>
            <input
              type="text"
              placeholder="First Name"
            />
            <input
              type="text"
              placeholder="Last Name"
            />
            <input
              type="email"
              placeholder="Email Address"
            />
            <input
              type="tel"
              placeholder="Phone Number"
            />
            <select>
              <option value="">Select a Service</option>
              <option value="Criminal Law">Criminal Law</option>
              <option value="Family Law">Family Law</option>
              <option value="Consumer Law">Consumer Law</option>
              <option value="Corporate Law">Corporate Law</option>
            </select>
            <textarea rows="5" placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
    </div>
  )
}

export default FreeConsultationForm