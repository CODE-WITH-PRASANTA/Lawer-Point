import React from 'react';
import './AboutTestimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Assets
import bg from '../../assets/testimonial-bg.webp';
import client1 from '../../assets/client-photo.webp';
import client2 from '../../assets/client-photo.webp';
import client3 from '../../assets/client-photo.webp';
import client4 from '../../assets/client-photo.webp';

// Testimonials data
const testimonials = [
  {
    quote: "Mike Wilson was great to work with. He set expectations from the beginning and answered all my questions with patience. Never felt rushed.",
    name: "Tom Holland",
    role: "Guy Hurley Blaser & Heuer, LLC",
    image: client1,
  },
  {
    quote: "Absolutely loved the professionalism and the results delivered. Highly recommended for anyone looking for quality work done on time.",
    name: "Emily Carter",
    role: "CEO, Carter Solutions",
    image: client2,
  },
  {
    quote: "The attention to detail and customer service was top-notch. They truly go above and beyond for their clients.",
    name: "David Smith",
    role: "Marketing Director, NovaCorp",
    image: client3,
  },
  {
    quote: "Reliable, innovative, and incredibly responsive. I’ve worked with many, but this team stands out.",
    name: "Sarah Johnson",
    role: "Founder, StartX Hub",
    image: client4,
  }
];

const AboutTestimonial = () => {
  return (
    <div
      className="About-Testimonial-section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="About-Testimonial-content">
        <h2 className="About-Testimonial-title">
          What People Say<span>”</span>
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          loop={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <p className="About-Testimonial-quote">{testimonial.quote}</p>
              <div className="About-Testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} className="About-Testimonial-client-img" />
                <div>
                  <h4 className="About-Testimonial-client-name">{testimonial.name}</h4>
                  <p className="About-Testimonial-client-role">{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AboutTestimonial;
