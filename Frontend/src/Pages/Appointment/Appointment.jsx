import React from 'react'
import './Appointment.css'
import AllLawers from '../../Components/AllLawers/AllLawers'
import FreeConsultationForm from '../../Components/FreeConsultationForm/FreeConsultationForm'

const Appointment = () => {
  return (
    <>
    <div className="Appointment-Section">
      <div className="Appointment-Overlay">
        <h1 className="Appointment-Heading">BOOK A CONSULTATION</h1>
        <p className="Appointment-Subheading">
          “ Need legal help? Our experienced lawyers are available for all types of legal matters – civil, criminal, corporate, property disputes, family law, and more. Get expert advice and solutions tailored to your case. ”
        </p>
      </div>
      <div className="Appointment-Breadcrumb">
        <span className="Appointment-BreadcrumbItem">Home</span>
        <span className="Appointment-Separator">»</span>
        <span className="Appointment-BreadcrumbItem">Book Appointment</span>
      </div>
    </div>
    <AllLawers />
    <FreeConsultationForm />
    </>

  )
}

export default Appointment
