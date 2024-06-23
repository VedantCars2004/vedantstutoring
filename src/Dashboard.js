import React from 'react';

const DashboardPage = ({ currentUser }) => {
  return (
    <div>
      <h1>Welcome {currentUser.username}</h1>
      <p>{currentUser.studentInfo}</p>
      {/* Display other dashboard content here */}
    </div>
  );
};

export default DashboardPage;
