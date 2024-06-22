import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import Navbar from './Navbar';
import Footer from './Footer';
import RegisterPage from './Register';
import LoginPage from './Login';
import StudentProgressPage from './StudentProgressPage'; // Import the new component

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
            {/* Public routes accessible to all users */}
            <Route path="/" element={isAuthenticated() ? <HomePage /> : <Navigate to="/login" />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Protected route accessible only to authenticated users */}
            <Route
              path="/student-progress"
              element={isAuthenticated() ? <StudentProgressPage /> : <Navigate to="/login" />}
            />

            {/* Route for Login page */}
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
