import React, { useState } from 'react';
import './LegalDraftBooking.css';
import { FaBars, FaCalendarAlt, FaFileAlt, FaCheckSquare } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const servicesData = {
  services: [
    {
      category: 'Cardiology',
      services: [
        { name: 'Spine Surgery', duration: '60 mins', price: '50 USD' },
        { name: 'Sports Medicine', duration: '45 mins', price: '55 USD' },
        { name: 'Pediatric Orthopedics', duration: '35 mins', price: '45 USD' },
      ],
    },
    {
      category: 'Neurology',
      services: [
        { name: 'Brain Surgery', duration: '60 mins', price: '50 USD' },
        { name: 'Spinal Cord Surgery', duration: '45 mins', price: '55 USD' },
        { name: 'Peripheral Nerves Surgery', duration: '35 mins', price: '45 USD' },
      ],
    },
    {
      category: 'Orthopedics',
      services: [
        { name: 'Broken Bones Surgery', duration: '60 mins', price: '50 USD' },
        { name: 'Dislocations', duration: '45 mins', price: '55 USD' },
        { name: 'Ruptures', duration: '35 mins', price: '45 USD' },
      ],
    },
  ],
  dateAndTime: [
    {
      date: '2024-09-16',
      timeSlots: ['10:00 AM', '11:00 AM', '12:00 PM'],
    },
    {
      date: '2024-09-17',
      timeSlots: ['10:00 AM', '11:00 AM', '12:00 PM'],
    },
  ]
};
const defaultAvailableTimes = ['10:00 am - 10:30 am', '10:30 am - 11:00 am', '11:00 am - 11:30 am', '11:30 am - 12:00 pm', '12:00 pm - 12:30 pm', '12:30 pm - 1:00 pm'];


const LegalDraftBooking = () => {
  const [step, setStep] = useState(1);
  const [selectedServiceCategory, setSelectedServiceCategory] = useState('Cardiology');
  const [selectedService, setSelectedService] = useState(null);  
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [basicDetails, setBasicDetails] = useState({
    firstname: '',
    lastname: '',
    email: '',
    person: '',
    note: '',
    country: 'India',
    state: 'Orissa',
    phone: '',
    city: '',
    address: '',
    pincode: ''
  });

  const handleDateChange = (date) => {
    setSelectedDate(date); 
    setSelectedTime('');   
  };

    const filteredTimeSlots = servicesData.dateAndTime.find(
    (entry) => entry.date === selectedDate?.toISOString().split('T')[0]
    )?.timeSlots || [];

const renderServiceStep = () => {
  const selectedServices = servicesData.services.find((s) => s.category === selectedServiceCategory);

  return (
    <div className="LegalDraftBooking-service-container">
      <h2 className="LegalDraftBooking-service-title">Select Service</h2>
      <label className="LegalDraftBooking-service-label">Service <span className="LegalDraftBooking-required">*</span></label>
      <select className="LegalDraftBooking-service-select" value={selectedServiceCategory} onChange={(e) => {
        setSelectedServiceCategory(e.target.value);
        setSelectedService(null); 
      }}>
        {servicesData.services.map((s) => (
          <option key={s.category} value={s.category}>{s.category}</option>
        ))}
      </select>
      <div className="LegalDraftBooking-service-cards">
        {selectedServices.services.map((service, i) => (
          <div
            key={i}
            className={`LegalDraftBooking-service-card ${selectedService?.name === service.name ? 'LegalDraftBooking-selected' : ''}`}
            onClick={() => setSelectedService(service)}
            style={{ cursor: 'pointer' }}
          >
            <h3 className="LegalDraftBooking-service-card-title">{service.name}</h3>
            <p className="LegalDraftBooking-service-card-duration"><span className="LegalDraftBooking-label">Duration :</span> {service.duration}</p>
            <p className="LegalDraftBooking-service-card-price"><span className="LegalDraftBooking-label">Price :</span> {service.price}</p>
          </div>
        ))}
      </div>
    </div>
        );
        };
  const renderDateAndTimeStep = () => (
   <div className="LegalDraftBooking-datetime-container">
      <h2 className="LegalDraftBooking-section-title">Select Date & Time</h2>

      <div className="LegalDraftBooking-form-group">
        <label className="LegalDraftBooking-input-label">
          Booking Date <span className="LegalDraftBooking-required">*</span>
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          placeholderText="Select Date"
          className="LegalDraftBooking-custom-datepicker LegalDraftBooking-full-width"
          minDate={new Date()} 
        />
      </div>

{selectedDate && (
  <div className="LegalDraftBooking-form-group">
    <label className="LegalDraftBooking-input-label">
      Booking Time <span className="LegalDraftBooking-required">*</span>
    </label>
    <div className="LegalDraftBooking-time-slots-grid">
      {(filteredTimeSlots.length > 0 ? filteredTimeSlots : defaultAvailableTimes).map((time, i) => (
        <div
          key={i}
          className={`LegalDraftBooking-time-slot-card ${selectedTime === time ? 'LegalDraftBooking-selected' : ''}`}
          onClick={() => setSelectedTime(time)}
        >
          <span className="LegalDraftBooking-slot-time">{time}</span>
        </div>
      ))}
    </div>
  </div>
)}
    </div>
  );


 const renderBasicDetailsStep = () => (
  <div className="LegalDraftBooking-basic-details-form">
    <h2 className="LegalDraftBooking-basic-details-title">Basic Details</h2>
    <div className="LegalDraftBooking-form-row">
      <div className="LegalDraftBooking-form-group">
        <label className="LegalDraftBooking-input-label">First Name<span className="LegalDraftBooking-required">*</span></label>
        <input type="text" name="firstname" placeholder="First Name" value={basicDetails.firstname} onChange={(e) => setBasicDetails({ ...basicDetails, firstname: e.target.value })} />
      </div>
      <div className="LegalDraftBooking-form-group">
        <label className="LegalDraftBooking-input-label">Last Name<span className="LegalDraftBooking-required">*</span></label>
        <input type="text" name="lastname" placeholder="Last Name" value={basicDetails.lastname} onChange={(e) => setBasicDetails({ ...basicDetails, lastname: e.target.value })} />
      </div>
    </div>

    <div className="LegalDraftBooking-form-row">
      <div className="LegalDraftBooking-form-group">
        <label className="LegalDraftBooking-input-label">Email<span className="LegalDraftBooking-required">*</span></label>
        <input type="email" name="email" placeholder="Email" value={basicDetails.email} onChange={(e) => setBasicDetails({ ...basicDetails, email: e.target.value })} />
      </div>
      <div className="LegalDraftBooking-form-group">
        <label className="LegalDraftBooking-input-label">Phone Number<span className="LegalDraftBooking-required">*</span></label>
        <div className="LegalDraftBooking-phone-input">
          <input type="text" name="phone" value={basicDetails.phone} onChange={(e) => setBasicDetails({ ...basicDetails, phone: e.target.value })} />
        </div>
      </div>
    </div>

    <div className="LegalDraftBooking-form-row">
      <div className="LegalDraftBooking-form-group">
        <label className="LegalDraftBooking-input-label">Country<span className="LegalDraftBooking-required">*</span></label>
        <select name="country" value={basicDetails.country} onChange={(e) => setBasicDetails({ ...basicDetails, country: e.target.value })}>
          <option>India</option>
        </select>
      </div>
      <div className="LegalDraftBooking-form-group">
        <label className="LegalDraftBooking-input-label">State<span className="LegalDraftBooking-required">*</span></label>
        <select name="state" value={basicDetails.state} onChange={(e) => setBasicDetails({ ...basicDetails, state: e.target.value })}>
          <option>Orissa</option>
        </select>
      </div>
      <div className="LegalDraftBooking-form-group">
        <label className="LegalDraftBooking-input-label">City<span className="LegalDraftBooking-required">*</span></label>
        <input type="text" name="city" value={basicDetails.city} onChange={(e) => setBasicDetails({ ...basicDetails, city: e.target.value })} />
      </div>
      <div className="LegalDraftBooking-form-group">
        <label className="LegalDraftBooking-input-label">Pin Code<span className="LegalDraftBooking-required">*</span></label>
        <input type="text" name="pincode" value={basicDetails.pincode} onChange={(e) => setBasicDetails({ ...basicDetails, pincode: e.target.value })} />
      </div>
    </div>

    <div className="LegalDraftBooking-form-group LegalDraftBooking-full-width">
      <label className="LegalDraftBooking-input-label">Address<span className="LegalDraftBooking-required">*</span></label>
      <textarea placeholder="Enter Address" value={basicDetails.address} onChange={(e) => setBasicDetails({ ...basicDetails, address: e.target.value })}></textarea>
    </div>

    <div className="LegalDraftBooking-form-group LegalDraftBooking-full-width">
      <label className="LegalDraftBooking-input-label">Describe Problem</label>
      <textarea placeholder="Describe Problem" value={basicDetails.describeProblem} onChange={(e) => setBasicDetails({ ...basicDetails, describeProblem: e.target.value })}></textarea>
    </div>

    <div className="LegalDraftBooking-form-group LegalDraftBooking-full-width">
      <label className="LegalDraftBooking-input-label">Important Notes</label>
      <textarea placeholder="Important Notes" value={basicDetails.importantNotes} onChange={(e) => setBasicDetails({ ...basicDetails, importantNotes: e.target.value })}></textarea>
    </div>

    <div className="LegalDraftBooking-form-group LegalDraftBooking-full-width">
      <label className="LegalDraftBooking-input-label">Upload Photos</label>
      <input type="file" multiple onChange={(e) => setBasicDetails({ ...basicDetails, photos: e.target.files })} />
    </div>
  </div>
);

const renderSummaryStep = () => (
  <div className="LegalDraftBooking-summary">
    <h2 className="LegalDraftBooking-summary-title">Booking Summary</h2>
    
    <section className="LegalDraftBooking-summary-section">
      <h3 className="LegalDraftBooking-summary-section-title">Service Details</h3>
      <p className="LegalDraftBooking-summary-section-text"><strong>Category:</strong> {selectedServiceCategory}</p>
      {selectedService && (
        <>
          <p className="LegalDraftBooking-summary-section-text"><strong>Name:</strong> {selectedService.name}</p>
          <p className="LegalDraftBooking-summary-section-text"><strong>Duration:</strong> {selectedService.duration}</p>
          <p className="LegalDraftBooking-summary-section-text"><strong>Price:</strong> {selectedService.price}</p>
        </>
      )}
      <p className="LegalDraftBooking-summary-section-text"><strong>Date:</strong> {selectedDate?.toISOString().split('T')[0]}</p>
      <p className="LegalDraftBooking-summary-section-text"><strong>Time:</strong> {selectedTime}</p>
    </section>

    <section className="LegalDraftBooking-summary-section">
      <h3 className="LegalDraftBooking-summary-section-title">Personal Details</h3>
      <p className="LegalDraftBooking-summary-section-text"><strong>First Name:</strong> {basicDetails.firstname}</p>
      <p className="LegalDraftBooking-summary-section-text"><strong>Last Name:</strong> {basicDetails.lastname}</p>
      <p className="LegalDraftBooking-summary-section-text"><strong>Email:</strong> {basicDetails.email}</p>
      <p className="LegalDraftBooking-summary-section-text"><strong>Phone:</strong> {basicDetails.phone}</p>
      <p className="LegalDraftBooking-summary-section-text"><strong>No. of Persons:</strong> {basicDetails.person}</p>
    </section>

    <section className="LegalDraftBooking-summary-section">
      <h3 className="LegalDraftBooking-summary-section-title">Address</h3>
      <p className="LegalDraftBooking-summary-section-text"><strong>Country:</strong> {basicDetails.country}</p>
      <p className="LegalDraftBooking-summary-section-text"><strong>State:</strong> {basicDetails.state}</p>
      <p className="LegalDraftBooking-summary-section-text"><strong>City:</strong> {basicDetails.city}</p>
      <p className="LegalDraftBooking-summary-section-text"><strong>Pin Code:</strong> {basicDetails.pincode}</p>
      <p className="LegalDraftBooking-summary-section-text"><strong>Address:</strong> {basicDetails.address}</p>
    </section>

    {basicDetails.note && (
      <section className="LegalDraftBooking-summary-section">
        <h3 className="LegalDraftBooking-summary-section-title">Note</h3>
        <p className="LegalDraftBooking-summary-section-text">{basicDetails.note}</p>
      </section>
    )}
  </div>
);

  return (
    <div className="LegalDraftBooking-container">
<div className="LegalDraftBooking-sidebar">
  <button className={`LegalDraftBooking-sidebar-btn ${step === 1 ? 'LegalDraftBooking-active' : ''}`}>
    <FaBars className="LegalDraftBooking-sidebar-icon" /> 
    <span>Service</span>
  </button>
  <button className={`LegalDraftBooking-sidebar-btn ${step === 2 ? 'LegalDraftBooking-active' : ''}`}>
    <FaCalendarAlt className="LegalDraftBooking-sidebar-icon" /> 
    <span>Date & Time</span>
  </button>
  <button className={`LegalDraftBooking-sidebar-btn ${step === 3 ? 'LegalDraftBooking-active' : ''}`}>
    <FaFileAlt className="LegalDraftBooking-sidebar-icon" /> 
    <span>Basic Details</span>
  </button>
  <button className={`LegalDraftBooking-sidebar-btn ${step === 4 ? 'LegalDraftBooking-active' : ''}`}>
    <FaCheckSquare className="LegalDraftBooking-sidebar-icon" /> 
    <span>Summary</span>
  </button>
</div>
      <div className="LegalDraftBooking-content">
        {step === 1 && renderServiceStep()}
        {step === 2 && renderDateAndTimeStep()}
        {step === 3 && renderBasicDetailsStep()}
        {step === 4 && renderSummaryStep()}
        <div className="LegalDraftBooking-button-container">
          {step > 1 && <button className="LegalDraftBooking-previous-btn" onClick={() => setStep(step - 1)}>Previous</button>}
          {step < 4 && <button className="LegalDraftBooking-next-btn" onClick={() => setStep(step + 1)}>Next</button>}
          {step === 4 && <button className="LegalDraftBooking-submit-btn">Submit</button>}
        </div>
      </div>
    </div>
  );
};

export default LegalDraftBooking;