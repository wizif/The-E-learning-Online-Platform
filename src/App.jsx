import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import CourseDetail from './pages/CourseDetail';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';

const App = () => {
  return (
    <>
          <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/course/:id" element={<CourseDetail />} />

      </Routes>
      <Footer />
    </>
  );
};

export default App;
