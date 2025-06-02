import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CourseCard from '../components/CourseCard';
import Testimonials from '../components/Testimonials';
import CategoriesSection from '../components/Categories';
import FAQSection from '../components/Faq';
import CourseCarousel from '../components/CourseCarousel';
import Footer from '../components/Footer';

import '../styles/Home.css';
import courses from '../data/courses';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef();

  useEffect(() => {
    // Hero section animation
    if (heroRef.current) {
      gsap.from(heroRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }

    // Animate other sections on scroll
    gsap.utils.toArray('section').forEach(section => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const popularCourses = courses.slice(0, 3);

  return (
    <div className="home">
      {/* Header/Hero Section */}
      <header className="header" ref={heroRef}>
        <div className="container header__container">
          <div className="header__left">
            <h1>Grow your skills with EduZone to ace your Career</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Consequatur assumenda voluptas, ipsum nihil eligendi eaque 
              odio doloremque nam a accusantium?
            </p>
            <Link to="/courses" className="btn btn-primary">Get Started</Link>
          </div>
          <div className="header__right">
            <div className="header__right-image">
              <img src="./images/the logo of main.avif" alt="EduZone Learning" />
            </div>
          </div>
        </div>
      </header>

      {/* Course Carousel */}
      <CourseCarousel />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Popular Courses Section */}
      <section className="courses">
        <h2>Our Popular Courses</h2>
        <div className="container courses__container">
          {popularCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <FAQSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;