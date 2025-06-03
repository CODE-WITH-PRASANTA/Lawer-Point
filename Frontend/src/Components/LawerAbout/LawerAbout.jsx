import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LawerAbout.css'
import DavidImg from '../../assets/David.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



const attorneys = [
  'Meet All Attorneys',
  'David Vigo Michel - Family',
  'Jem Stome Lawrence - Consumer',
  'Mercy Van Desosa - Criminal',
  'Nancy Williamson - Business',
  'Stephen Fernando - Criminal',
  'Darren Flemming - Criminal',
];

const profile = {
  name: 'DAVID VIGO MICHEL',
  title: 'Family Lawyer',
  phone: '98765-12-345',
  email: 'Stephen@domain.com',
  description: 'Stephen Flemming is a seasoned aggressive attorney who devotes 100% of a practice to criminal defense. Gang Related Attempted Murder to a first-time DUI, he has the experience and knowledge to handle the broadest range of criminal matters.',
  objective: 'Seasoned and aggressive attorney who devotes practice to criminal defense and related is a long will be distracted by the justice.',
  signature: 'Carolina',
};

const socialIcons = [
  { icon: faFacebookF },
  { icon: faTwitter },
  { icon: faGooglePlusG },
  { icon: faLinkedinIn },
];

const educationData = {
  aboutEducation: [
    {
      title: 'University of Oxford School of Law, J.D., 1968 -',
      description: 'Stephen Flemming is a seasoned and its aggressive attorneydevotes 100% of his practice to criminal defense. Gang Related Attempted Murder to a first time DUI, he has the experience and knowledge to handle the broadesting.',
    },
    {
      title: 'University of Oxford, BA., 1965 -',
      description: 'Aggressive attorneydevotes of his practice seds ut to criminal defensse. Gang Related Attempted Murder to a first time DUI, he has the experience and knowledge to handle the broadesting range of criminal matters is a long established fact that a reader will be distracted.',
    },
  ],
  barAdmissions: [
    {
      title: 'District of Mexico -',
      description: 'It is a long established fact that a reader will be distracteed by the readable content of a page when looking at its layout the point of using lorem Ipsum is that it has a more-or-less seds normal distribiution he point of using admissions in the bar admission.',
    },
    {
      title: 'Vatican City -',
      description: 'There are many variations of passages of Lorem Ipsum availablee, but the majority have suffered lawyer alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
    },
  ],
  courtAdmissions: [
    {
      title: 'UK Supreme Court -',
      description: 'There are many variations of passages of Lorem Ipsum available ut, but the majority have suffered alteration in some form by injected humour, or randomised words which don\'t look even the slightly believable if you are going to use a passage of Lorem Ipsums, you need in the middle the UK Supreme Court.',
    },
  ],
  professionalAffiliations: [
    {
      title: 'Board of Director of St.Pauls Pediatric AIDS Foundation.',
    },
    {
      title: 'Advisory Board, Food and Drug Law Institute.',
    },
    {
      title: 'Advisory Board, World Food Regulation Review.',
    },
  ],
  honorsAndAwards: [
    {
      description: 'It is a long established fact that a reader will be distracted by the readable content of a pages is when looking at its layoutt he point sed of using Lorem Ipsum is that it has a more-or-less normal distribution',
    },
  ],
};

const LawerAbout = () => {

      const navigate = useNavigate();

  const handleAppointmentClick = () => {
    navigate("/appointment/booking");
  };

  
  return (
  <>
      <div className="lawyer-about-container">
        <div className="lawyer-about-sidebar">
          <h2 className="lawyer-about-sidebar-title">Other Attorneys</h2>
          <hr className="lawyer-about-decorative-line" />
          <ul className="lawyer-about-attorney-list">
            {attorneys.map((attorney, index) => (
              <li key={index} className={index === 1 ? 'lawyer-about-active' : 'lawyer-about-attorney-item'}>{attorney}</li>
            ))}
          </ul>
        </div>
        <div className="lawyer-about-profile">
          <div className="lawyer-about-profile-main">
            <img src={DavidImg} alt="David Vigo Michel" className="lawyer-about-profile-img" />
            <div className="lawyer-about-profile-content">
              <div className="lawyer-about-profile-header">
                <div>
                  <h1 className="lawyer-about-profile-name">{profile.name}</h1>
                  <p className="lawyer-about-profile-title">{profile.title}</p>
                </div>
                <div className="lawyer-about-contact">
                  <div className="lawyer-about-contact-item">
                    <FontAwesomeIcon icon={faPhone} className="lawyer-about-icon" />
                    <span>{profile.phone}</span>
                  </div>
                  <div className="lawyer-about-contact-item">
                    <FontAwesomeIcon icon={faEnvelope} className="lawyer-about-icon" />
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </div>
                </div>
              </div>
              <p className="lawyer-about-description">{profile.description}</p>

              <h2 className="lawyer-about-objective-title">My Objective</h2>
              <hr className="lawyer-about-decorative-line" />
              <p className="lawyer-about-objective">{profile.objective}</p>

              <div className="lawyer-about-signature">{profile.signature}</div>
              <div className="lawyer-about-appointment-container">
                <button className="lawyer-about-appointment" onClick={handleAppointmentClick}>FOR APPOINTMENT</button>
                <div className="lawyer-about-social-icons">
                  {socialIcons.map((socialIcon, index) => (
                    <button key={index} className="lawyer-about-social-icon-button">
                      <FontAwesomeIcon icon={socialIcon.icon} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lawyer-about-education-container">
        <div className="lawyer-about-section">
          <h2 className="lawyer-about-section-title">About Education</h2>
          {educationData.aboutEducation.map((item, index) => (
            <div className="lawyer-about-entry" key={index}>
              <span className="lawyer-about-icon-box">
                <span className="lawyer-about-arrow">❯</span>
              </span>
              <div className="lawyer-about-text">
                <strong>{item.title}</strong> {item.description}
              </div>
            </div>
          ))}
        </div>

        <div className="lawyer-about-section">
          <h2 className="lawyer-about-section-title">Bar Admissions</h2>
          {educationData.barAdmissions.map((item, index) => (
            <div className="lawyer-about-entry" key={index}>
              <span className="lawyer-about-icon-box">
                <span className="lawyer-about-arrow">❯</span>
              </span>
              <div className="lawyer-about-text">
                <strong>{item.title}</strong> {item.description}
              </div>
            </div>
          ))}
        </div>

        <div className="lawyer-about-section">
          <h2 className="lawyer-about-section-title">Court Admissions</h2>
          {educationData.courtAdmissions.map((item, index) => (
            <div className="lawyer-about-entry" key={index}>
              <span className="lawyer-about-icon-box">
                <span className="lawyer-about-arrow">❯</span>
              </span>
              <div className="lawyer-about-text">
                <strong>{item.title}</strong> {item.description}
              </div>
            </div>
          ))}
        </div>

        <div className="lawyer-about-section">
          <h2 className="lawyer-about-section-title">Professional Affiliations</h2>
          {educationData.professionalAffiliations.map((item, index) => (
            <div className="lawyer-about-entry" key={index}>
              <span className="lawyer-about-icon-box">
                <span className="lawyer-about-arrow">❯</span>
              </span>
              <div className="lawyer-about-text">
                <strong>{item.title}</strong>
              </div>
            </div>
          ))}
        </div>

        <div className="lawyer-about-section">
          <h2 className="lawyer-about-section-title">Honors and Awards</h2>
          {educationData.honorsAndAwards.map((item, index) => (
            <div className="lawyer-about-entry" key={index}>
              <span className="lawyer-about-icon-box">
                <span className="lawyer-about-arrow">❯</span>
              </span>
              <div className="lawyer-about-text">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>

  </>
  )
}

export default LawerAbout