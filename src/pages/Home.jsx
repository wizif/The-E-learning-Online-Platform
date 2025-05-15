import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import CourseCard from '../components/CourseCard';
import img1 from '../assets/img1.jpg'; // Replace with your images
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import Testimonials from '../components/Testimonials';

import './Home.css';
import courses from '../data/courses';

// const courses = [
//   {
//     id: 1,
//     image: img1,
//     title: 'HTML & CSS',
//     description: 'Learn the basics of web development with HTML and CSS.',
//   },
//   {
//     id: 2,
//     image: img2,
//     title: 'JavaScript Basics',
//     description: 'Understand JS fundamentals and DOM manipulation.',
//   },
//   {
//     id: 3,
//     image: img3,
//     title: 'React Essentials',
//     description: 'Build dynamic UIs using React library.',
//   },
// ];
const Home = () => {
    const heroRef = useRef();
  
    useEffect(() => {
      gsap.from(heroRef.current, {
        y: -30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power2.out',
      });
    }, []);
  
    return (
      <div className="home">
        <section className="hero" ref={heroRef}>
          <h1>Learn From Top Courses</h1>
          <p>Build your future by learning today!</p>
        </section>
  
        <section className="course-section">
          <h2>Our Courses</h2>
          <div className="course-grid">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      </div>
    );
  };
  
  export default Home;