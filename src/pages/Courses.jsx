import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaFilter, FaSpinner } from 'react-icons/fa';
import CourseCard from '../components/CourseCard';
import coursesData from '../data/courses';
import '../styles/Courses.css';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [categories, setCategories] = useState(['All']);

  useEffect(() => {
    try {
      // Simulate data loading
      setTimeout(() => {
        if (!coursesData || !Array.isArray(coursesData)) {
          throw new Error('Invalid courses data format');
        }

        // Get all unique categories - FIXED: Added missing parenthesis
        const allCategories = ['All', ...new Set(coursesData.map(course => 
          course?.category || 'Uncategorized'
        ))];
        
        setCategories(allCategories);
        setFilteredCourses(coursesData);
        setLoading(false);
      }, 500); // Simulate network delay
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!coursesData) return;

    const filtered = coursesData.filter(course => {
      if (!course) return false;
      
      // FIXED: Balanced parentheses in matchesSearch condition
      const matchesSearch = 
        course.title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
        course.description?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = 
        categoryFilter === 'All' || 
        course.category === categoryFilter;
      
      return matchesSearch && matchesCategory;
    });

    setFilteredCourses(filtered);
  }, [searchTerm, categoryFilter]);

  if (loading) {
    return (
      <div className="loading-state">
        <FaSpinner className="spinner-icon" />
        <p>Loading courses...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-state">
        <h2>Error loading courses</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <main className="courses-page">
      {/* Hero Section */}
      <section className="courses-hero">
        <div className="container">
          <h1>Our Courses</h1>
          <p>Find the perfect course to advance your skills</p>
        </div>
      </section>

      {/* Filter Controls */}
      <section className="courses-controls">
        <div className="container">
          <div className="controls-wrapper">
            <div className="search-control">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search courses"
              />
            </div>
            
            <div className="filter-control">
              <FaFilter className="filter-icon" />
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                aria-label="Filter by category"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="courses-grid-section">
        <div className="container">
          {filteredCourses.length > 0 ? (
            <div className="courses-grid">
              {filteredCourses.map((course, index) => (
                <CourseCard 
                  key={course?.id || index}
                  course={course}
                />
              ))}
            </div>
          ) : (
            <div className="no-courses-found">
              <h3>No courses matching your criteria</h3>
              <p>Try adjusting your search or filter</p>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setSearchTerm('');
                  setCategoryFilter('All');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Courses;