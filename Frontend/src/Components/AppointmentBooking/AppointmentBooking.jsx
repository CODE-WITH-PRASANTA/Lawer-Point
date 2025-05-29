import React, { useState, useMemo } from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import '@fortawesome/fontawesome-free/css/all.min.css';
import QRCode from "react-qr-code";
import "./AppointmentBooking.css";
import c1 from '../../assets/C1.webp';
import ci from '../../assets/c-i-1.webp';
import ci1 from '../../assets/c-i-2.webp';
import ci2 from '../../assets/c-i-3.webp';
import ptm from '../../assets/ptm.webp'
import stp from '../../assets/stp.webp'
import pp from '../../assets/pp.webp'

const AppointmentBooking = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedClinic, setSelectedClinic] = useState(null);
  const [selectedDate, setSelectedDate] = useState('2025-05-27');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedYear, setSelectedYear] = useState(2025);
  const [selectedMonth, setSelectedMonth] = useState(4); // May (0-indexed)

  const daysInMonth = useMemo(() => new Date(selectedYear, selectedMonth + 1, 0).getDate(), [selectedYear, selectedMonth]);
  const firstDayOfMonth = useMemo(() => new Date(selectedYear, selectedMonth, 1).getDay(), [selectedYear, selectedMonth]);

  const handleDateClick = (dateStr) => {
    setSelectedDate(dateStr);
  };

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  const handleClinicSelect = (clinic) => {
    setSelectedClinic(clinic);
  };

  const handleNewBooking = () => {
    setCurrentStep(0);
    setSelectedSpecialty("");
    setSelectedService(null);
    setSelectedType(null);
    setSelectedClinic(null);
    setSelectedDate('2025-05-27');
    setSelectedTime('');
  };

  const handleTimeClick = (time) => {
    if (time !== '-') {
      setSelectedTime(time);
    }
  };

  const servicesData = [
  { name: "Property Agreement Drafting", price: "₹1,500" },
  { name: "Legal Notice Preparation", price: "₹1,000" },
  { name: "Will Drafting", price: "₹2,000" },
  { name: "Divorce Petition Filing", price: "₹3,500" },
  { name: "Court Representation (Civil)", price: "₹5,000" },
  { name: "Business Contract Drafting", price: "₹4,000" },
];


  const steps = ["Specialty", "Appointment Type", "Date & Time", "Basic Information", "Payment", "Confirmation"];

  const appointmentTypes = ["Office", "Video Call", "Audio Call", "Chat", "Home Visit"];

  const office = [
    {
      logo: ci,
      name: "AllCare Family Medicine",
      address: "3343 Private Lane, Valdosta",
      distance: "500 Meters",
    },
    {
      logo: ci1,
      name: "Vitalplus Clinic",
      address: "4223 Pleasant Hill Road, Miami, FL 33169",
      distance: "12 KM",
    },
    {
      logo: ci2,
      name: "Wellness Path Chiropractic",
      address: "418 Patton Lane, Garner, NC 27529, FL 33169",
      distance: "16 KM",
    },
  ];

  const timeSlots = {
  Morning: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM'],
  Afternoon: ['12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM'],
  Evening: ['05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM'],
};
const sections = Object.keys(timeSlots);

  return (
    <div className="appointment-booking-container">
      {/* Steps Section */}
      <div className="appointment-booking-steps">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`appointment-booking-step ${index === currentStep ? "active" : index < currentStep ? "completed" : "disabled"}`}
        >
          <span>{index + 1}</span>
          <p>{step}</p>
        </div>
      ))}
       </div>

      {/* Doctor Card Section */}
      <div className="appointment-booking-doctor-card">
        <div className="appointment-booking-doctor-image">
          <img src={c1} alt="Dr. Michael Brown" />
        </div>
        <div className="appointment-booking-doctor-details">
          <h3>
            Dr. Michael Brown <span className="appointment-booking-rating"><FaStar /> 5.0</span>
          </h3>
          <p className="appointment-booking-specialty">Family Lawer</p>
          <p className="appointment-booking-location">
            <FaMapMarkerAlt /> 5th Street - 1011 W 5th St, Suite 120, Austin, TX 78703
          </p>
        </div>
      </div>

      {/* Form Sections */}
      {currentStep === 0 && (
        <div className="appointment-booking-form-section">
    <label htmlFor="legal-category">Select Legal Category</label>
    <div className="appointment-booking-dropdown">
      <select
        id="legal-category"
        value={selectedSpecialty}
        onChange={(e) => setSelectedSpecialty(e.target.value)}
      >
        <option value="">Select</option>
        <option value="Property Dispute">Property Dispute</option>
        <option value="Family Law">Family Law</option>
        <option value="Criminal Law">Criminal Law</option>
        <option value="Corporate Law">Corporate Law</option>
        <option value="Civil Litigation">Civil Litigation</option>
      </select>
    </div>

    <h4>Legal Services</h4>
    <div className="appointment-booking-services-grid">
      {servicesData.map((service, index) => (
        <div
          key={index}
          className={`appointment-booking-service-card ${selectedService === index ? "selected" : ""}`}
          onClick={() => setSelectedService(index)}
        >
          <p className="appointment-booking-service-name">{service.name}</p>
          <p className="appointment-booking-service-price">{service.price}</p>
        </div>
      ))}
    </div>
          <div className="appointment-booking-buttons">
            <button className="appointment-booking-next-btn" onClick={handleNextStep}>
              Select Appointment Type
            </button>
          </div>
        </div>
      )}

      {currentStep === 1 && (
        <div className="appointment-booking-form-section">
          <h4>Select Appointment Type</h4>
          <div className="appointment-booking-appointment-types">
          {appointmentTypes.map((type) => (
  <button
    key={type}
    className={`appointment-booking-type-btn ${selectedType === type ? "active" : ""}`}
    onClick={() => handleTypeSelect(type)}
  >
    {type === "Office" && <i className="fas fa-building"></i>}
    {type === "Video Call" && <i className="fas fa-video"></i>}
    {type === "Audio Call" && <i className="fas fa-phone-alt"></i>}
    {type === "Chat" && <i className="fas fa-comments"></i>}
    {type === "Home Visit" && <i className="fas fa-home"></i>}
    <span>{type}</span>
  </button>
))}

          </div>

          {selectedType === "Office" && (
            <div>
              <h4>Select Office</h4>
              <div className="appointment-booking-clinics-list">
                {office.map((clinic, index) => (
                  <div
                    key={index}
                    className={`appointment-booking-clinic-card ${selectedClinic === clinic ? "selected" : ""}`}
                    onClick={() => handleClinicSelect(clinic)}
                  >
                    <img src={clinic.logo} alt={clinic.name} />
                    <div className="appointment-booking-clinic-details">
                      <h5>{clinic.name}</h5>
                      <p>{clinic.address}</p>
                      <p>{clinic.distance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="appointment-booking-buttons">
            <button className="appointment-booking-back-btn" onClick={handlePreviousStep}>
              Back
            </button>
            <button className="appointment-booking-next-btn" onClick={handleNextStep}>
              Select Date & Time
            </button>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="appointment-booking-form-section">
          <h4 className="appointment-booking-form-title">Date & Time</h4>

          <div className="appointment-booking-calendar-time-wrapper">
            <div className="appointment-booking-calendar-container">
              <div className="appointment-booking-calendar-header">
                <select value={selectedYear} onChange={e => setSelectedYear(+e.target.value)}>
                  {[2024, 2025, 2026].map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                <select value={selectedMonth} onChange={e => setSelectedMonth(+e.target.value)}>
                  {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month, index) => (
                    <option key={index} value={index}>{month}</option>
                  ))}
                </select>
              </div>

              <div className="appointment-booking-calendar-body">
                <div className="appointment-booking-weekdays">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
                    <span key={i}>{day}</span>
                  ))}
                </div>
                <div className="appointment-booking-dates">
                  {Array.from({ length: firstDayOfMonth }, (_, i) => (
                    <div key={`empty-${i}`} className="appointment-booking-date-cell empty"></div>
                  ))}
                  {Array.from({ length: daysInMonth }, (_, i) => {
                    const day = i + 1;
                    const dateStr = `${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                    return (
                      <div
                        key={day}
                        className={`appointment-booking-date-cell ${selectedDate === dateStr ? 'active-day' : ''}`}
                        onClick={() => handleDateClick(dateStr)}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="appointment-booking-time-box">
            {sections.map((section) => (
  <div className="appointment-booking-time-section" key={section}>
    <p className="appointment-booking-time-label">{section}</p>
    <div className="appointment-booking-time-slots">
      {timeSlots[section].map((slot, i) => (
        <button
          key={i}
          className={`appointment-booking-time-btn ${selectedTime === slot ? 'active' : ''}`}
          onClick={() => handleTimeClick(slot)}
        >
          {slot}
        </button>
      ))}
    </div>
  </div>
))}

            </div>
          </div>

          <div className="appointment-booking-button-group">
            <button className="appointment-booking-back-btn" onClick={handlePreviousStep}>
              Back
            </button>
            <button
              className="appointment-booking-next-btn"
              onClick={() => {
                if (selectedDate && selectedTime) handleNextStep();
                else alert('Please select both date and time.');
              }}
            >
              Add Basic Information
            </button>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="appointment-booking-form-section">
          <h4>Basic Information</h4>
          <div className="appointment-booking-form-grid">
            <div className="appointment-booking-form-group"><label>First Name</label><input type="text" /></div>
            <div className="appointment-booking-form-group"><label>Last Name</label><input type="text" /></div>
            <div className="appointment-booking-form-group"><label>Phone Number</label><input type="tel" /></div>
            <div className="appointment-booking-form-group"><label>Email Address</label><input type="email" /></div>
            <div className="appointment-booking-form-group">
              <label>Select Patient</label>
              <select>
                <option value="">Select</option>
                <option value="patient1">Patient 1</option>
                <option value="patient2">Patient 2</option>
              </select>
            </div>
            <div className="appointment-booking-form-group"><label>Symptoms</label><input type="text" /></div>
            <div className="appointment-booking-form-group"><label>Attachment</label><input type="file" /></div>
            <div className="appointment-booking-form-group full-width">
              <label>Reason for Visit</label>
              <textarea />
            </div>
          </div>
          <div className="appointment-booking-buttons">
            <button className="appointment-booking-back-btn" onClick={handlePreviousStep}>Back</button>
            <button className="appointment-booking-next-btn" onClick={handleNextStep}>Payment</button>
          </div>
        </div>
      )}

      {currentStep === 4 && (
        <div className="appointment-booking-form-section">
          <h4 className="appointment-booking-section-title">Payment</h4>
          <div className="appointment-booking-payment-booking-container">
            <div className="appointment-booking-payment-container">
              <h5 className="appointment-booking-payment-title">Payment Gateway</h5>
              <div className="appointment-booking-payment-methods">
                <button className="appointment-booking-payment-method active">
                  <img src={ptm} alt="Credit Card" /> Credit Card
                </button>
                <button className="appointment-booking-payment-method">
                  <img src={pp} alt="Paypal" /> Paypal
                </button>
                <button className="appointment-booking-payment-method">
                  <img src={stp} alt="Stripe" /> Stripe
                </button>
              </div>

              <form className="appointment-booking-payment-form">
                <div className="appointment-booking-form-group">
                  <label>Card Holder Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="appointment-booking-form-group">
                  <label>Card Number</label>
                  <input type="text" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="appointment-booking-form-row">
                  <div className="appointment-booking-form-group">
                    <label>Expire Date</label>
                    <input type="text" placeholder="MM/YY" />
                  </div>
                  <div className="appointment-booking-form-group">
                    <label>CVV</label>
                    <input type="text" placeholder="123" />
                  </div>
                </div>
              </form>
            </div>

            <div className="appointment-booking-booking-info">
              <h5 className="appointment-booking-payment-title">Booking Info</h5>
              <p><strong>Date & Time:</strong> 10:00 - 11:00 AM, 15, Oct 2025</p>
              <p><strong>Appointment type:</strong> Clinic (Wellness Path)</p>
              <div className="appointment-booking-payment-details">
                <p>Echocardiograms <span>$200</span></p>
                <p>Booking Fees <span>$20</span></p>
                <p>Tax <span>$18</span></p>
                <p className="appointment-booking-discount">Discount <span>-$15</span></p>
                <div className="appointment-booking-total-box">
                  <span>Total</span>
                  <span>$223</span>
                </div>
              </div>
            </div>
          </div>

          <div className="appointment-booking-buttons">
            <button className="appointment-booking-back-btn" onClick={handlePreviousStep}>Back</button>
            <button className="appointment-booking-next-btn" onClick={handleNextStep}>Confirm & Pay</button>
          </div>
        </div>
      )}

      {currentStep === 5 && (
        <div className="appointment-final-booking-container">
          <div className="appointment-booking-confirmation-header">
            <h2>✅ Booking Confirmed</h2>
            <p>Your Booking has been Confirmed with <strong>Dr. Michael Brown</strong>. Be on time at least <strong>15 mins</strong> before the appointment.</p>
          </div>

          <div className="appointment-booking-body">
            <div className="appointment-booking-left-panel">
              <div className="appointment-booking-booking-info">
                <h3>Booking Info</h3>
                <p><strong>Service:</strong> {selectedService && servicesData[selectedService].name}</p>
                <p><strong>Date & Time:</strong> {selectedDate} {selectedTime}</p>
                <p><strong>Clinic Name & Location:</strong> {selectedClinic && selectedClinic.name} <a href="#">View Location</a></p>
                <p><strong>Appointment type:</strong> {selectedType}</p>
                <button onClick={handlePreviousStep} className="appointment-booking-btn appointment-booking-reschedule-btn">Reschedule</button>
              </div>
              <div className="appointment-booking-need-assistance">
                <h3>Need Our Assistance</h3>
              <p>Call us in case you face any issue on Booking / Cancellation</p>
                              <button className="appointment-booking-btn appointment-booking-call-btn">Call Us</button>
              </div>
            </div>
            <div className="appointment-booking-right-panel">
              <div className="appointment-booking-booking-number">
                <h3>Booking Number</h3>
                <p className="appointment-booking-id">DCRA{Math.floor(Math.random() * 100000)}</p>
                <QRCode value={`DCRA${Math.floor(Math.random() * 100000)}`} size={150} />
                <p className="appointment-booking-qr-note">Scan this QR Code to Download the details of Appointment</p>
              </div>
              <div className="appointment-booking-action-buttons">
                <button className="appointment-booking-btn appointment-booking-calendar-btn">Add To Calendar</button>
                <button className="appointment-booking-btn appointment-booking-booking-btn" onClick={handleNewBooking}>Start New Booking</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentBooking;