// DashboardPage.js
import React from 'react';
import './Dashboard.css';

const DashboardPage = ({ currentUser }) => {
  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-page">
      <h2 className="section-title">Welcome, {currentUser.username}</h2>
      <p>Here's your personalized dashboard.</p>
      <div className="dashboard-content">
        <div className="info-group">
          <label>Number of Meetings This Week:</label>
          <p><center>{currentUser.meetings}</center></p>
        </div>
        <div className="info-group">
          <label>Meeting Times:</label>
          <ul>
            {currentUser.meetingTimes.map((time, index) => (
              <li key={index}>{time}</li>
            ))}
          </ul>
        </div>
        <div className="info-group">
          <label>Skills Worked On:</label>
          <ul>
            {currentUser.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="info-group">
          <label>Payment Due:</label>
          <p><center>${currentUser.payment}</ center></p>
        </div>
        <div className="info-group">
          <label>Extra Comments:</label>
          <p>{currentUser.comments}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;