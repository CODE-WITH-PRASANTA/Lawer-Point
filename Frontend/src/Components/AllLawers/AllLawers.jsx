import React from 'react'
import './AllLawers.css'

// Asserts
import Lawer1 from '../../assets/Lawer-1.webp'
import Lawer2 from '../../assets/Lawer-2.webp'

import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
} from "react-icons/fa";

const attorneysData = [
  {
    name: "David Vigo Michel",
    title: "Family Lawyer",
    phone: "98765-12-345",
    email: "Davidvigo@domain.com",
    image: Lawer1,
  },
  {
    name: "Jem Stone Lawrence",
    title: "Consumer Lawyer",
    phone: "97877-32-100",
    email: "Jemstone@domain.com",
    image: Lawer2,
  },
  {
    name: "Mercy Van Desosa",
    title: "Criminal Lawyer",
    phone: "97901-23-456",
    email: "Mercydesosa@domain.com",
    image: Lawer2,
  },
  {
    name: "Patrick John Meckey",
    title: "Consumer Lawyer",
    phone: "98765-43-210",
    email: "Patrickmeckey@domain.com",
    image: Lawer2,
  },
  {
    name: "Amelia Bright",
    title: "Civil Lawyer",
    phone: "97899-88-100",
    email: "ameliab@domain.com",
    image: Lawer1,
  },
  {
    name: "Chris Evans",
    title: "Corporate Lawyer",
    phone: "97777-22-111",
    email: "chrisevans@domain.com",
    image: Lawer2,
  },
  {
    name: "Sophia Lee",
    title: "Property Lawyer",
    phone: "97666-33-222",
    email: "sophialee@domain.com",
    image: Lawer1,
  },
  {
    name: "Daniel Craig",
    title: "Divorce Lawyer",
    phone: "97555-44-333",
    email: "danielcraig@domain.com",
    image: Lawer2,
  },
];


const AllLawers = () => {
  return (
    <div>
  <div className="All-Lawer-Container">
      <div className="All-Lawer-Wrapper">
        {attorneysData.map((attorney, index) => (
          <div className="All-Lawer-Card" key={index}>
            <div className="All-Lawer-Image">
              <img src={attorney.image} alt={attorney.name} />
            </div>
            <div className="All-Lawer-Info">
              <h3 className="All-Lawer-Name">{attorney.name}</h3>
              <p className="All-Lawer-Title">{attorney.title}</p>
              <hr />
              <div className="All-Lawer-Contact">
                <p><FaPhoneAlt /> {attorney.phone}</p>
                <p><FaEnvelope /> {attorney.email}</p>
              </div>
              <div className="All-Lawer-Social">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaGooglePlusG /></a>
                <a href="#"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  )
}

export default AllLawers