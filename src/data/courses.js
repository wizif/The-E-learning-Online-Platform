// src/data/courses.js
import course1Img from '../images/course1.jpg';
import course2Img from '../images/course2.jpg';
import course3Img from '../images/course3.jpg';

const courses = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    description: 'Master HTML, CSS, JavaScript, React, and Node.js',
    image: course1Img,
    category: 'Web Development',
    duration: '12 weeks',
    level: 'Beginner',
    rating: 4.8,
    students: 2500,
    price: 4999
  },
  {
    id: 2,
    title: 'Data Science Bootcamp',
    description: 'Learn Python, Pandas, NumPy, and data visualization',
    image: course2Img,
    category: 'Data Science',
    duration: '10 weeks',
    level: 'Intermediate',
    rating: 4.7,
    students: 1800,
    price: 5999
  },
  {
    id: 3,
    title: 'AI & Machine Learning',
    description: 'Neural networks, algorithms, and ML model building',
    image: course3Img,
    category: 'AI',
    duration: '14 weeks',
    level: 'Advanced',
    rating: 4.9,
    students: 2200,
    price: 6499
  }
];

export default courses;
