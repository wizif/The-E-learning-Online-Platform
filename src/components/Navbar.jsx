import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo">Winwise Courses</h2>

        {/* Hamburger menu button */}
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        {/* Navigation links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
          <li><NavLink to="/courses" onClick={() => setMenuOpen(false)}>Courses</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
