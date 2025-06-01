import React from 'react';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import '../styles/CourseCard.css'; // you can create this file for styles

const CourseCard = ({ course }) => {
    const [showModal, setShowModal] = useState(false);

  return (
    
    <Link to={`/course/${course.id}`} className="course-card">
        <button onClick={() => setShowModal(true)} className="enroll-btn">
  Enroll Now
</button>
      <img src={course.image} alt={course.title} className="course-img" />
      <div className="course-info">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <p className="price">{course.price}</p>
      </div>
    </Link>
  );
};

export default CourseCard;
