import React from 'react';
import CourseCard from '../components/CourseCard';

const dummyCourses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    description: "Learn HTML, CSS, JS, React, and more!",
    image: "/images/web-course.jpg",
  },
  {
    id: 2,
    title: "Python for Beginners",
    description: "Master Python from scratch.",
    image: "/images/python-course.jpg",
  },
  {
    id: 3,
    title: "Data Science Crash Course",
    description: "Numpy, Pandas, ML, and more.",
    image: "/images/data-science.jpg",
  },
];

const Courses = () => {
  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default Courses;
