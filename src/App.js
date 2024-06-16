import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import Navbar from './Navbar';
import Footer from './Footer';
import RegisterPage from './Register'; // New import for Register page
import LoginPage from './Login'; // New import for Login page

const App = () => {
  const isAuthenticated = () => {
    // Check if the user is authenticated by checking the token in localStorage
    return !!localStorage.getItem('token');
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={
              isAuthenticated() ? <HomePage /> : <Navigate to="/login" />
            } />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
