import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaClock, FaUserGraduate, FaLevelUpAlt, FaStar, FaArrowLeft } from 'react-icons/fa';
import coursesData from '../data/courses';
import '../styles/CourseDetail.css';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('curriculum');

  useEffect(() => {
    // Simulate API fetch
    const foundCourse = coursesData.find(course => course.id === parseInt(id));
    setCourse(foundCourse);
    setLoading(false);
    
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  if (!course) {
    return (
      <div className="course-not-found">
        <h2>Course not found</h2>
        <Link to="/courses" className="btn btn-primary">
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="course-detail-page">
      {/* Course Header */}
      <section className="course-header">
        <div className="container">
          <Link to="/courses" className="back-button">
            <FaArrowLeft /> Back to Courses
          </Link>
          
          <div className="course-header-content">
            <div className="course-meta">
              <span className="course-category">{course.category}</span>
              <span className="course-rating">
                <FaStar /> {course.rating || '4.8'}
              </span>
            </div>
            
            <h1>{course.title}</h1>
            <p className="course-excerpt">{course.description}</p>
            
            <div className="course-stats">
              <div className="stat-item">
                <FaClock />
                <span>{course.duration}</span>
              </div>
              <div className="stat-item">
                <FaUserGraduate />
                <span>{course.students || '500+'} students</span>
              </div>
              <div className="stat-item">
                <FaLevelUpAlt />
                <span>{course.level}</span>
              </div>
            </div>
          </div>
          
          <div className="course-image">
            <img src={course.image} alt={course.title} />
          </div>
        </div>
      </section>

      {/* Course Tabs */}
      <section className="course-tabs">
        <div className="container">
          <div className="tabs-header">
            <button
              className={activeTab === 'curriculum' ? 'active' : ''}
              onClick={() => setActiveTab('curriculum')}
            >
              Curriculum
            </button>
            <button
              className={activeTab === 'instructor' ? 'active' : ''}
              onClick={() => setActiveTab('instructor')}
            >
              Instructor
            </button>
            <button
              className={activeTab === 'reviews' ? 'active' : ''}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="course-tab-content">
        <div className="container">
          {activeTab === 'curriculum' && (
            <div className="curriculum-content">
              <h3>What you'll learn</h3>
              <ul className="learning-list">
                {course.learningOutcomes?.map((outcome, index) => (
                  <li key={index}>
                    <span>✓</span> {outcome}
                  </li>
                )) || [
                  "All core concepts of the subject",
                  "Practical real-world examples",
                  "Best practices and techniques",
                  "Project-based learning"
                ].map((outcome, index) => (
                  <li key={index}>
                    <span>✓</span> {outcome}
                  </li>
                ))}
              </ul>
              
              <h3>Course Content</h3>
              <div className="modules-list">
                {course.modules?.map((module, index) => (
                  <div className="module" key={index}>
                    <div className="module-header">
                      <h4>{module.title}</h4>
                      <span>{module.duration}</span>
                    </div>
                    <ul className="lessons-list">
                      {module.lessons.map((lesson, idx) => (
                        <li key={idx}>
                          <span>{idx + 1}</span> {lesson}
                        </li>
                      ))}
                    </ul>
                  </div>
                )) || (
                  <p>Course curriculum details coming soon!</p>
                )}
              </div>
            </div>
          )}

          {activeTab === 'instructor' && (
            <div className="instructor-content">
              <div className="instructor-card">
                <img 
                  src={course.instructor?.image || '/images/default-instructor.jpg'} 
                  alt={course.instructor?.name || 'Course Instructor'}
                />
                <div className="instructor-info">
                  <h3>{course.instructor?.name || 'Expert Instructor'}</h3>
                  <p className="instructor-title">
                    {course.instructor?.title || 'Senior Professional'}
                  </p>
                  <p className="instructor-bio">
                    {course.instructor?.bio || 'Our instructors are industry professionals with years of practical experience in their fields.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="reviews-content">
              {course.reviews?.length > 0 ? (
                <div className="reviews-list">
                  {course.reviews.map((review, index) => (
                    <div className="review" key={index}>
                      <div className="review-header">
                        <span className="review-author">{review.author}</span>
                        <span className="review-rating">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <FaStar key={i} className={i < review.rating ? 'filled' : ''} />
                          ))}
                        </span>
                      </div>
                      <p className="review-text">{review.text}</p>
                      <span className="review-date">{review.date}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No reviews yet. Be the first to review!</p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Course CTA */}
      <section className="course-cta">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Ready to start learning?</h2>
              <p>Join thousands of students in this course today</p>
            </div>
            <button className="btn btn-primary btn-large">
              Enroll Now - ${course.price || '49.99'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;