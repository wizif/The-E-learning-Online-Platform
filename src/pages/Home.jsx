import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

import CourseCard from '../components/CourseCard';
import Testimonials from '../components/Testimonials';

import '../styles/Home.css';
import courses from '../data/courses';

const Home = () => {
  const heroRef = useRef();

  useEffect(() => {
    // Animation for hero section
    gsap.from(heroRef.current, {
      y: -30,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: 'power2.out',
    });
  }, []);

  // Get popular courses (first 3 from your data)
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

      {/* Categories Section */}
      <section className="categories">
        <div className="container categories__container">
          <div className="categories__left">
            <h1>Categories</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Architecto praesentium facilis voluptatum illum blanditiis 
              distinctio nulla quisquam enim quos fugit accusamus, nesciunt 
              doloremque tempora quod quo incidunt sint! Iure, reiciendis!
            </p>
            <Link to="/courses" className="btn">Learn More</Link>
          </div>

          <div className="categories__right">
            <article className="category">
              <span className="category__icon"><i className="uil uil-bitcoin-circle"></i></span>
              <h5>Blockchain</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing iure laborum animi.</p>
            </article>
            
            <article className="category">
              <span className="category__icon"><i className="uil uil-palette"></i></span>
              <h5>Graphic Design</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing iure laborum animi.</p>
            </article>
            
            <article className="category">
              <span className="category__icon"><i className="uil uil-usd-circle"></i></span>
              <h5>Finance</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing iure laborum animi.</p>
            </article>
            
            <article className="category">
              <span className="category__icon"><i className="uil uil-megaphone"></i></span>
              <h5>Marketing</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing iure laborum animi.</p>
            </article>
            
            <article className="category">
              <span className="category__icon"><i className="uil uil-music"></i></span>
              <h5>Music</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing iure laborum animi.</p>
            </article>
            
            <article className="category">
              <span className="category__icon"><i className="uil uil-puzzle-piece"></i></span>
              <h5>Business</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing iure laborum animi.</p>
            </article>
          </div>
        </div>
      </section>

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
      <section className="faqs">
        <h2>Frequently Asked Questions</h2>
        <div className="container faqs__container">
          <article className="faq">
            <div className="faq__icon"><i className="uil uil-plus"></i></div>
            <div className="question__answer">
              <h4>Why Should I Prefer This Site?</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Dolor velit ut placeat fugit molestias quo 
                repellendus quod, ab aliquam consequatur.
              </p>
            </div>
          </article>

          {/* Add more FAQ items as needed */}
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default Home;