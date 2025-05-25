// ManageTeamMember.jsx
import React from 'react';
import './ManageTeamMember.css';
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn
} from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import Member1 from '../../assets/team-image-1.webp';
import Member2 from '../../assets/team-image-2.webp';
import Member3 from '../../assets/team-image-3.webp';
import Member4 from '../../assets/team-image-4.webp';

const teamMembers = [
  {
    img: Member1,
    name: 'David Vigo Michel',
    role: 'Family Lawyer',
    phone: '98765-12-345',
    email: 'Davidvigo@domain.com',
  },
  {
    img: Member2,
    name: 'Jem Stone Lawrence',
    role: 'Consumer Lawyer',
    phone: '97877-32-100',
    email: 'Jemstone@domain.com',
  },
  {
    img: Member3,
    name: 'Mercy Van Desosa',
    role: 'Criminal Lawyer',
    phone: '97901-23-456',
    email: 'Mercydesosa@domain.com',
  },
  {
    img: Member4,
    name: 'Patrick John Meckey',
    role: 'Consumer Lawyer',
    phone: '98765-43-210',
    email: 'Patrickmeckey@domain.com',
  },
  {
    img: Member3,
    name: 'Mercy Van Desosa',
    role: 'Criminal Lawyer',
    phone: '97901-23-456',
    email: 'Mercydesosa@domain.com',
  },
  {
    img: Member4,
    name: 'Patrick John Meckey',
    role: 'Consumer Lawyer',
    phone: '98765-43-210',
    email: 'Patrickmeckey@domain.com',
  },
];

const ManageTeamMember = () => {
  return (
    <div className="manage-team-member-container">
      <h2 className="manage-team-member-title">Meet Our Attorneys</h2>
      <div className="manage-team-member-line" />

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="manage-team-member-card">
              <img src={member.img} alt={member.name} className="manage-team-member-img" />
              <h3 className="manage-team-member-name">{member.name}</h3>
              <p className="manage-team-member-role">{member.role}</p>
              <div className="manage-team-member-contact">
                <p><FaPhone className="manage-team-member-icon" /> {member.phone}</p>
                <p><FaEnvelope className="manage-team-member-icon" /> {member.email}</p>
              </div>
              <div className="manage-team-member-socials">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaGooglePlusG /></a>
                <a href="#"><FaLinkedinIn /></a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ManageTeamMember;
