import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaClock } from 'react-icons/fa';
import PropTypes from 'prop-types';

const CourseCard = ({ course }) => {
  // Guard clause if course is undefined
  if (!course) {
    return <div className="course-card error">Course data missing</div>;
  }

  return (
    <div className="course-card">
      <div className="course-image">
        <img 
          src={course.image || '/images/course-placeholder.jpg'} 
          alt={course.title || 'Course image'}
        />
        <span className="category-badge">
          {course.category || 'Uncategorized'}
        </span>
      </div>
      
      {/* Rest of your component */}
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    duration: PropTypes.string,
    level: PropTypes.string,
    rating: PropTypes.number,
    students: PropTypes.number,
    price: PropTypes.number
  })
};

export default CourseCard;