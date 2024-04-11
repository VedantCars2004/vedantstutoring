import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.js';
import WhyPage from './WhyPage.js';
import ContactPage from './ContactPage.js';

const App = () => {
  return (
    <Router>
      <div className="app">
        <HomePage />
        <Routes>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/why" element={<WhyPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;