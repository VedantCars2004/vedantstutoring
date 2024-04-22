// StudentSessionHistory.js
import React from 'react';

const StudentSessionHistory = ({ session }) => {
  return (
    <div>
      <h3>Session Date: {session.date}</h3>
      <p>Topic: {session.topic}</p>
      <p>Notes: {session.notes}</p>
      {/* Add any other relevant session details */}
    </div>
  );
};

export default StudentSessionHistory;