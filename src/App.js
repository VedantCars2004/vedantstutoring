// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import Navbar from './Navbar';
import Footer from './Footer';
import ParentDashboard from './ParentDashboard';
import Login from './Login';
import PrivateRoute from './PrivateRoute'; // Import the PrivateRoute component

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/parent-dashboard"
              element={
                <PrivateRoute>
                  <ParentDashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;