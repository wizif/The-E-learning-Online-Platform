import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "../styles/Carousel.css";

import course1Img from '../images/course1.jpg';
import course2Img from '../images/course2.jpg';
import course3Img from '../images/course3.jpg';

const CourseCarousel = () => {
  const carouselImages = [
    course1Img,
    course2Img,
    course3Img
  ];

  return (
    <section className="carousel">
      <div className="container">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {carouselImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="carousel-slide">
                <img src={image} alt={`Course ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CourseCarousel;
