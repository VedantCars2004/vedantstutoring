// DashboardPage.js
import React from 'react';
import './Dashboard.css';

const DashboardPage = ({ currentUser }) => {
  return (
    <div className="dashboard-page">
      <h2 className="section-title">Welcome, {currentUser.username}</h2>
      <p>Here's your personalized dashboard.</p>
      <div className="dashboard-content">
        <div className="info-group">
          <label>Student Information:</label>
          <p>{currentUser.studentInfo}</p>
        </div>
        {/* Add more dashboard content here */}
      </div>
    </div>
  );
};

export default DashboardPage;