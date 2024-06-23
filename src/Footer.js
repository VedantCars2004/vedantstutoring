// Footer.js
import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Vedant Gohel</h2>
        <div className="vertical-center-wrapper">
        <br></br>
          <div className="contact-info">
           
            <p><FaPhone /> 331-999-4867</p>
            <p><FaEnvelope /> vedantuiuc@gmail.com</p>
          </div>
          <p className="website-info">Self-developed website with React, HTML/CSS, and JavaScript.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
