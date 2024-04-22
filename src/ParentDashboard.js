import React, { useState, useEffect } from 'react';
import firebase from './firebase'; // Import the initialized Firebase instance
import StudentSessionHistory from './StudentSessionHistory';

const ParentDashboard = () => {
  const [studentHistory, setStudentHistory] = useState([]);

  useEffect(() => {
    const fetchStudentHistory = async () => {
      try {
        // Make an API call to fetch student history data
        const response = await fetch('/api/student-history', {
          headers: {
            'Authorization': `Bearer ${firebase.auth().currentUser.getIdToken()}` // Pass the authenticated user's token
          }
        });
        const data = await response.json();
        setStudentHistory(data);
      } catch (error) {
        console.error('Error fetching student history:', error);
      }
    };

    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        fetchStudentHistory();
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <h1>Parent Dashboard</h1>
      {studentHistory.length > 0 ? (
        <div>
          <h2>Student Session History</h2>
          {studentHistory.map((session) => (
            <StudentSessionHistory key={session.id} session={session} />
          ))}
        </div>
      ) : (
        <p>No session history available.</p>
      )}
    </div>
  );
};

export default ParentDashboard;