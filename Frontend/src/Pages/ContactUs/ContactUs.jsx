import React from 'react'
import './ContactUs.css'
import ContactForm from '../../Components/ContactForm/ContactForm'

const ContactUs = () => {
  return (
    <>
     <div className="Contact-Section">
      <div className="Contact-Overlay">
        <h1 className="Contact-Heading">CONTACT OUR LEGAL EXPERTS</h1>
        <p className="Contact-Subheading">
          “ Get expert assistance in legal drafting, consultation, and complete legal solutions. We specialize in civil, criminal, corporate, property, family law, and more — tailored to your needs with confidentiality and precision. ”
        </p>
      </div>
      <div className="Contact-Breadcrumb">
        <span className="Contact-BreadcrumbItem">Home</span>
        <span className="Contact-Separator">»</span>
        <span className="Contact-BreadcrumbItem">Contact Us</span>
      </div>
    </div>
    <ContactForm />
    </>
  )
}

export default ContactUs
