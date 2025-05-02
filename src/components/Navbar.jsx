import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ toggleTheme, isDark }) => {
  return (
    <nav className="navbar">
      <div className="logo">Mohamed Saiah Aissa</div>
      <ul className="nav-links">
        <li><a href="#summary">Summary</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <label className="theme-toggle">
            <input type="checkbox" onChange={toggleTheme} checked={isDark} />
            <span className="slider"></span>
          </label>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
