import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import WhyPage from './WhyPage';
import ContactPage from './ContactPage';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/why" element={<WhyPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;