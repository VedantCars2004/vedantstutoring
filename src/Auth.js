import React, { useState } from 'react';
import Login from './Login';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
    setIsAuthenticated(true);
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Welcome {currentUser.username}</h1>
          <p>Meetings this week: {currentUser.meetings}</p>
          <p>Meeting Times: {currentUser.meetingTimes.join(", ")}</p>
          <p>Skills: {currentUser.skills.join(", ")}</p>
          <p>Payment Due: ${currentUser.payment}</p>
          <p>Comments: {currentUser.comments}</p>
        </div>
      ) : (
        <Login onLogin={handleLogin} users={users} />
      )}
    </div>
  );
};

export default App;