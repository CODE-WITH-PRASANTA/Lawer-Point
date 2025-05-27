import React from 'react'
import './ContactForm.css'

import { BiMessageDetail } from "react-icons/bi";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";


const ContactForm = () => {
  return (
    <div>
 <section className="Contactus-Form-Container">
      <div className="Contactus-Form-Header">
        <BiMessageDetail className="Contactus-Form-Header-Icon" />
        <p className="Contactus-Form-Header-Subtitle">
          We have world-class, flexible support via live chat, email, and phone. We guarantee
          that you’ll be able to have any issue resolved within 24 hours. You can contact
          our support immediately here.
        </p>
      </div>

      <div className="Contactus-Form-Info-Cards">
        <div className="Contactus-Form-Info-Card">
          <FaMapMarkerAlt className="Contactus-Form-Info-Card-Icon" />
          <h4 className="Contactus-Form-Info-Card-Title">Law Firm Address</h4>
          <p className="Contactus-Form-Info-Card-Description">Melbourne’s GPO 350 Bourke St.</p>
          <p className="Contactus-Form-Info-Card-Description">Melbourne VIC 3000, Australia</p>
        </div>
        <div className="Contactus-Form-Info-Card">
          <FaPhoneAlt className="Contactus-Form-Info-Card-Icon" />
          <h4 className="Contactus-Form-Info-Card-Title">Call Us Support 24/7</h4>
          <p className="Contactus-Form-Info-Card-Description">+84 1654 066 456</p>
          <p className="Contactus-Form-Info-Card-Description">+001-862-745-5173</p>
        </div>
        <div className="Contactus-Form-Info-Card">
          <FaEnvelope className="Contactus-Form-Info-Card-Icon" />
          <h4 className="Contactus-Form-Info-Card-Title">Our Email Hotel</h4>
          <p className="Contactus-Form-Info-Card-Description">Frontlinewinner@gmail.com</p>
          <p className="Contactus-Form-Info-Card-Description">Frontlinesupport@gmail.com</p>
        </div>
      </div>

      <form className="Contactus-Form">
        <div className="Contactus-Form-Input-Group">
          <input type="text" placeholder="Your Name*" required className="Contactus-Form-Input" />
          <input type="email" placeholder="Email*" required className="Contactus-Form-Input" />
          <input type="tel" placeholder="Phone Number*" required className="Contactus-Form-Input" />
        </div>
        <textarea placeholder="Message*" rows="6" required className="Contactus-Form-Textarea"></textarea>
        <button type="submit" className="Contactus-Form-Button">Send Message</button>
      </form>

      <div className="Contactus-Form-Socials-Bar">
        <div className="Contactus-Form-Socials-Container">
          <div className="Contactus-Form-Social-Item">
            <i className="fab fa-facebook-f"></i>
            <span>Facebook</span>
          </div>
          <div className="Contactus-Form-Social-Item">
            <i className="fab fa-google-plus-g"></i>
            <span>Google +</span>
          </div>
          <div className="Contactus-Form-Social-Item">
            <i className="fab fa-instagram"></i>
            <span>Instagram</span>
          </div>
          <div className="Contactus-Form-Social-Item">
            <i className="fab fa-pinterest-p"></i>
            <span>Pinterest</span>
          </div>
          <div className="Contactus-Form-Social-Item">
            <i className="fab fa-skype"></i>
            <span>Skype</span>
          </div>
          <div className="Contactus-Form-Social-Item">
            <i className="fab fa-twitter"></i>
            <span>Twitter</span>
          </div>
        </div>
      </div>

      <div className="Contactus-Form-Map-Container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19805.006838928804!2d-0.1357!3d51.509865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb7a4dfdb2f%3A0x6a0d63cba6b1c81c!2sLondon!5e0!3m2!1sen!2suk!4v1685389133834!5m2!1sen!2suk" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="Contactus-Form-Responsive-Map"
        ></iframe>
      </div>
    </section>
    
    </div>
  )
}

export default ContactForm