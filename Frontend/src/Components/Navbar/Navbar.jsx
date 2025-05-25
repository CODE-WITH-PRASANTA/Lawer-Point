import React, { useState } from 'react';
import './Navbar.css';
import {
  FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram,
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes
} from 'react-icons/fa';
import logo from '../../assets/Lawer-Point-Logo.webp';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // WhatsApp link with predefined message
  const whatsAppLink = "https://wa.me/6372545244?text=Hey%2C%20I%20need%20a%20Website%20%2F%20Application";

  return (
    <div className="navbar-container">
      {/* Topbar */}
      <div className="navbar-topbar">
        <div className="Topbar-Container">
          <div className="navbar-topbar-left">
            <div className="navbar-contact-item"><FaPhoneAlt className="navbar-icon" /> <span>+91- 6372 545 244</span></div>
            <div className="navbar-contact-item"><FaEnvelope className="navbar-icon" /> <span>lawerpoint.com@gmail.com</span></div>
            <div className="navbar-contact-item"><FaMapMarkerAlt className="navbar-icon" /> <span>Nexus Esplanade , Bhubaneswar Unit No. 32, 721</span></div>
          </div>
          <div className="navbar-topbar-right">
            <div className="navbar-social-icon"><FaFacebookF /></div>
            <div className="navbar-social-icon"><FaTwitter /></div>
            <div className="navbar-social-icon"><FaYoutube /></div>
            <div className="navbar-social-icon"><FaLinkedinIn /></div>
            <div className="navbar-social-icon"><FaInstagram /></div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar-main">
        <div className="Navbar-Main-container">
          <div className="navbar-main-left">
            <img src={logo} alt="Company Logo" className="navbar-logo" />
          </div>

          <ul className="navbar-main-links">
            <li className="navbar-link-item"><Link to="/">Home</Link></li>
            <li className="navbar-link-item"><Link to="/services">Services</Link></li>
            <li className="navbar-link-item"><Link to="/cases">Cases</Link></li>
            <li className="navbar-link-item"><Link to="/appointment">Appointment</Link></li>
            <li className="navbar-link-item"><Link to="/pricing-details">Pricing & Details</Link></li>
            <li className="navbar-link-item"><Link to="/faqs">FAQs</Link></li>
            <li className="navbar-link-item"><Link to="/news">News</Link></li>
            <li className="navbar-link-item"><Link to="/contact-us">Contact Us</Link></li>
          </ul>

          <div className="navbar-main-right">
            <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
              <button className="navbar-demo-btn">Get Free Consultant</button>
            </a>
          </div>

          <div className="navbar-mobile-toggle" onClick={() => setIsMobileMenuOpen(true)}>
            <FaBars />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <img src={logo} alt="Company Logo" className="mobile-logo" />
          <FaTimes className="close-icon" onClick={() => setIsMobileMenuOpen(false)} />
        </div>
        <ul className="mobile-menu-links">
          <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link></li>
          <li><Link to="/cases" onClick={() => setIsMobileMenuOpen(false)}>Cases</Link></li>
          <li><Link to="/appointment" onClick={() => setIsMobileMenuOpen(false)}>Appointment</Link></li>
          <li><Link to="/pricing-details" onClick={() => setIsMobileMenuOpen(false)}>Pricing & Details</Link></li>
          <li><Link to="/faqs" onClick={() => setIsMobileMenuOpen(false)}>FAQs</Link></li>
          <li><Link to="/news" onClick={() => setIsMobileMenuOpen(false)}>News</Link></li>
          <li><Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
        </ul>

        <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
          <button className="mobile-demo-btn">Get Free Consultant</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;