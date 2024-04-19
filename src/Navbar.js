// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/why" className="nav-link">
            Why Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;