import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/CourseDetail.css';
import courses from '../data/courses';
import gsap from 'gsap';

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id.toString() === id);

  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.from(imageRef.current, { x: -100, opacity: 0, duration: 1 });
    gsap.from(contentRef.current, { x: 100, opacity: 0, duration: 1 });
  }, []);

  if (!course) {
    return <div className="course-detail"><h2>Course Not Found</h2></div>;
  }

  return (
    <div className="course-detail">
      <div className="course-detail-container">
        <img
          src={course.image}
          alt={course.title}
          className="course-image"
          ref={imageRef}
        />
        <div className="course-content" ref={contentRef}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <ul>
            <li><strong>Instructor:</strong> {course.instructor}</li>
            <li><strong>Duration:</strong> {course.duration}</li>
            <li><strong>Level:</strong> {course.level}</li>
          </ul>
          <button className="enroll-btn">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
// 
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import coursesData from '../data/courses';

// const CourseDetail = () => {
//   const { id } = useParams();
//   const course = coursesData.find(c => c.id.toString() === id);

//   if (!course) return <h2>Course not found</h2>;

//   return (
//     <div className="course-detail">
//       <h2>{course.title}</h2>
//       <img src={course.image} alt={course.title} />
//       <p>{course.description}</p>
//       {/* Add syllabus, instructor info, etc. if needed */}
//     </div>
//   );
// };

// export default CourseDetail;

