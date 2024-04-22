import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import Navbar from './Navbar';
import Footer from './Footer';
import ParentDashboard from './ParentDashboard'; // Import the ParentDashboard component

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/parent-dashboard" element={<ParentDashboard />} /> {/* Add the new route for ParentDashboard */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;