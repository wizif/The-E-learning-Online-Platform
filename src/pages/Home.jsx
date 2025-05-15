import React from 'react';
import CourseCard from '../components/CourseCard';
import img1 from '../assets/img1.jpg'; // Replace with your images
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import Testimonials from '../components/Testimonials';

import './Home.css';

const courses = [
  {
    id: 1,
    image: img1,
    title: 'HTML & CSS',
    description: 'Learn the basics of web development with HTML and CSS.',
  },
  {
    id: 2,
    image: img2,
    title: 'JavaScript Basics',
    description: 'Understand JS fundamentals and DOM manipulation.',
  },
  {
    id: 3,
    image: img3,
    title: 'React Essentials',
    description: 'Build dynamic UIs using React library.',
  },
];

const Home = () => {
  return (
    <main>
      <section className="hero-section">
        <h2>Explore Our Courses</h2>
        <div className="course-list">
          {courses.map(course => (
            <CourseCard
              key={course.id}
              image={course.image}
              title={course.title}
              description={course.description}
            />
          ))}
        </div>
      </section>
      <Testimonials />

    </main>
  );
};

export default Home;
