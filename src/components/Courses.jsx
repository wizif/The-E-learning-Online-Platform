// src/pages/Courses.jsx
import React, { useState } from 'react';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';
import Categories from '../components/Categories';
import '../styles/Courses.css';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const uniqueCategories = [...new Set(courses.map(course => course.category))];

  const filteredCourses =
    selectedCategory === 'All'
      ? courses
      : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="courses-page">
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={uniqueCategories}
      />
      <div className="courses-container">
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
