import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Navbar = () => {
  const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            VEDANT'S TUTORING
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        {isAuthenticated() && (
          <li className="nav-item">
            <Link to="/student-progress" className="nav-link">
              Student Progress
            </Link>
          </li>
        )}
        {!isAuthenticated() && (
          <>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
