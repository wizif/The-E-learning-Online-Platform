import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaClock } from 'react-icons/fa';
import PropTypes from 'prop-types';
import '../styles/CourseCard.css';

const CourseCard = ({ course }) => {
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

      <div className="course-details">
        <h3>{course.title}</h3>
        <p>{course.description}</p>

        <div className="course-meta">
          <span className="course-duration">
            <FaClock /> {course.duration}
          </span>
          <span className="course-level">{course.level}</span>
        </div>

        <div className="course-stats">
          <span className="course-rating">
            <FaStar /> {course.rating.toFixed(1)}
          </span>
          <span className="course-students">{course.students}+ Students</span>
        </div>

        <div className="course-footer">
          <span className="course-price">₹{course.price}</span>
          <Link to={`/courses/${course.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
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
