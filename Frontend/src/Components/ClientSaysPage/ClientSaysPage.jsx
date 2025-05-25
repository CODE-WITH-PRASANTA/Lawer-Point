import React from 'react';
import './ClientSaysPage.css';
import { FaQuoteRight, FaBalanceScale, FaBriefcase, FaUser } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Assets
import ClientPhoto from '../../assets/client-photo.webp';
import ClientSign from '../../assets/signature-client.webp';

const clientReviews = [
  {
    name: 'Alex Carolina',
    position: 'CEO of RJX Solutions',
    text: 'How to pursue pleasure rationally consequences that are extremely painful or again is there anyone who loves or pursues or desires to obtain pain of itself...',
    image: ClientPhoto,
    signature: ClientSign,
  },
  {
    name: 'Jessica White',
    position: 'Founder at WhiteCorp',
    text: 'Absolutely wonderful! I would be lost without this team. We have seen amazing results already.',
    image: ClientPhoto,
    signature: ClientSign,
  },
  {
    name: 'Michael Smith',
    position: 'CTO at InnovateX',
    text: 'They understand our needs and always deliver beyond expectations. Highly professional!',
    image: ClientPhoto,
    signature: ClientSign,
  },
];

const ClientsSaysPage = () => {
  return (
    <div className="Clients-says-section">
      <div className="Clients-says-left">
        <div className="Clients-says-quote-icon">
          <FaQuoteRight />
        </div>
        <h2 className="Clients-says-title">What Our Clients Say</h2>
        <div className="Clients-says-divider"></div>

         <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.clients-swiper-pagination', bulletClass: 'clients-swiper-bullet', bulletActiveClass: 'clients-swiper-bullet-active' }}
            >

          {clientReviews.map((client, index) => (
            <SwiperSlide key={index}>
              <p className="Clients-says-testimonial-text">{client.text}</p>
              <div className="Clients-says-client-info">
                <img src={client.image} alt="Client" className="Clients-says-client-photo" />
                <div>
                  <h4 className="Clients-says-client-name">{client.name}</h4>
                  <span className="Clients-says-client-position">{client.position}</span>
                </div>
              </div>
              <img src={client.signature} alt="Signature" className="Clients-says-client-sign" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="clients-swiper-pagination" />

      </div>

      <div className="Clients-says-right">
        <h2 className="Clients-says-title">Why Clients Choose Us</h2>
        <div className="Clients-says-divider"></div>
        <div className="Clients-says-client-point">
          <FaBalanceScale className="Clients-says-point-icon" />
          <div>
            <h4 className="Clients-says-point-title">Fight For Justice</h4>
            <p className="Clients-says-point-text">
              Seeking justice in the world is a significant emotional investment. When we follow this call, we’re deeply committed.
            </p>
          </div>
        </div>
        <div className="Clients-says-client-point">
          <FaBriefcase className="Clients-says-point-icon" />
          <div>
            <h4 className="Clients-says-point-title">Best Case Strategy</h4>
            <p className="Clients-says-point-text">
              Proving liability in personal injury and complex litigation requires relentless effort and a strategic approach.
            </p>
          </div>
        </div>
        <div className="Clients-says-client-point">
          <FaUser className="Clients-says-point-icon" />
          <div>
            <h4 className="Clients-says-point-title">Experienced Attorneys</h4>
            <p className="Clients-says-point-text">
              Our attorneys bring years of courtroom experience and specialized knowledge to every case we handle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsSaysPage;
