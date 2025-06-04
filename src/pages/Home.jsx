import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CourseCard from '../components/CourseCard';
import Testimonials from '../components/Testimonials';
import Categories from '../components/Categories';
import FAQSection from '../components/Faq';
import CourseCarousel from '../components/CourseCarousel';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

// import thecourse from "../images/course1.jpg"; 
import '../styles/Home.css';
import courses from '../data/courses';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef();

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
    }

    gsap.utils.toArray('section').forEach(section => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const popularCourses = courses.slice(0, 3);

  return (
    <div className="home">
      <Hero ref={heroRef} />

      {/* Carousel section */}
      <section className="carousel-section">
        <CourseCarousel />
      </section>

      {/* Categories */}
      <section className="categories-section">
        <Categories />
      </section>

      {/* Courses */}
      <section className="courses">
        <h2>Our Popular Courses</h2>
        <div className="container courses__container">
          {popularCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="faq-section">
        <FAQSection />
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <Testimonials />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
