import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "../styles/Carousel.css";
const CourseCarousel = () => {
  const carouselImages = [
    '..assets/Images/course1.jpg',
    '..assets/Images/course2.jpg',
    '..assets/Images/course3.jpg',
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