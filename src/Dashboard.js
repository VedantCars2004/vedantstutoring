import React from 'react';
import './Dashboard.css';

const DashboardPage = ({ currentUser }) => {
  if (!currentUser) {
    return <div>Loading...</div>;
  }

  const handleJoinMeeting = () => {
    window.open('https://meet.google.com/ume-fohk-tue', '_blank');
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-grid">
        <div className="dashboard-content welcome-box">
          <h2 className="section-title">Welcome, {currentUser.username}</h2>
          <button onClick={handleJoinMeeting} className="join-meeting-btn">
            Join Meeting
          </button>
        </div>
        <div className="dashboard-content info-box">
          <div className="info-column left-column">
            <div className="info-group">
              <label>Number of Meetings This Week:</label>
              <p>{currentUser.meetings}</p>
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
          </div>
          <div className="info-column right-column">
            <div className="info-group">
              <label>Payment Due:</label>
              <p>${currentUser.payment}</p>
            </div>
            <div className="info-group">
              <label>Extra Comments:</label>
              <p>{currentUser.comments}</p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default DashboardPage;