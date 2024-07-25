import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ authenticated, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-title">VEDANT'S TUTORING</Link>
        <ul className="navbar-links">
          <li><Link to="/schedule" className="nav-link">Schedule</Link></li> {/* New link for scheduling form */}
          {authenticated ? (
            <>
              <li><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
              <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <li><Link to="/login" className="logout-button">Login</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
