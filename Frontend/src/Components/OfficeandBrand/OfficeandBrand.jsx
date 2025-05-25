import React from 'react';
import './OfficeandBrand.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Assets
import Sponser1 from '../../assets/sponser-1.webp';
import Sponser2 from '../../assets/sponser-2.webp';
import Sponser3 from '../../assets/sponser-3.webp';
import Sponser4 from '../../assets/sponser-4.webp';
import Sponser5 from '../../assets/sponser-5.webp';

const sponsors = [Sponser1, Sponser2, Sponser3, Sponser4, Sponser5];

const OfficeandBrand = () => {
  return (
    <div className="ob-wrapper">

      {/* Office Information Section */}
      <section className="ob-office-section">
        <div className="ob-office-card">
          <div className="ob-icon"><FaMapMarkerAlt /></div>
          <h3>Visit Our Office</h3>
          <hr />
          <p>5648, VK 26th Lane Sparks Street,</p>
          <p>Opp Joe Park – Florida 26154</p>
        </div>

        <div className="ob-office-card">
          <div className="ob-icon"><FaPhoneAlt /></div>
          <h3>Get in Touch</h3>
          <hr />
          <p>+123 859 625, +321 569 742</p>
          <p>Lawyerjustice@Steelthemes.com</p>
        </div>

        <div className="ob-office-card">
          <div className="ob-icon"><FaClock /></div>
          <h3>Office Timing</h3>
          <hr />
          <p>Mon – Sat: 9:00 AM – 3:00 PM</p>
          <p>Sunday: Holiday</p>
        </div>
      </section>

      {/* Sponsor Logo Carousel Section */}
      <section className="ob-brand-carousel-section">
        <h2 className="ob-carousel-title">Our Trusted Sponsors</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {sponsors.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="ob-brand-card">
                <img src={logo} alt={`Sponsor ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

    </div>
  );
};

export default OfficeandBrand;
