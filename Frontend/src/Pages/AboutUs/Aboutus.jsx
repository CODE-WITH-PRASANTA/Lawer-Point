import React from 'react';
import './Aboutus.css';
import AboutAchievements from '../../Components/AboutAchivments/AboutAchievements';
import AboutBestLawer from '../../Components/AboutBestLawer/AboutBestLawer';
import AboutTimeline from '../../Components/AboutTimeline/AboutTimeline';
import AboutTestimonial from '../../Components/AboutTestimonial/AboutTestimonial';
import ManageTeamMember from '../../Components/ManageTeamMember/ManageTeamMember';
import FreeConsult from '../../Components/FreeConsult/FreeConsult';

const Aboutus = () => {
  return (
    <>
    <div className="About-US-Section">
      <div className="About-US-Overlay">
        <h1 className="About-US-Heading">ABOUT US</h1>
        <p className="About-US-Subheading">
          “ We are the leading law firm in India, offering expert solutions in legal drafting, documentation, and all types of civil, criminal, corporate, and family law services. ”
        </p>
      </div>
      <div className="About-US-Breadcrumb">
        <span className="About-US-BreadcrumbItem">Home</span>
        <span className="About-US-Separator">»</span>
        <span className="About-US-BreadcrumbItem">About Us</span>
      </div>
    </div>

    <AboutAchievements />
    <AboutBestLawer />
    <AboutTimeline />
    <AboutTestimonial />
    <ManageTeamMember />
    <FreeConsult />
    </>
  );
};

export default Aboutus;
