import React, { useState } from 'react';
import coursesData from '../data/courses'; // create a separate JS file to store course data
import CourseCard from '../components/CourseCard';
// import '..styles/'; // optional for styling

const Courses = () => {
  const [filter, setFilter] = useState('All');

  const filteredCourses = filter === 'All'
    ? coursesData
    : coursesData.filter(course => course.category === filter);

  return (
    <div className="courses-page">
      <h2>All Courses</h2>

      <div className="filter-buttons">
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Web Development')}>Web Dev</button>
        <button onClick={() => setFilter('Python')}>Python</button>
        <button onClick={() => setFilter('AI')}>AI</button>
        {/* Add more if needed */}
      </div>

      <div className="courses-container">
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
