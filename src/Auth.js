import React, { useState } from 'react';
import Login from './Login';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const users = [
    { username: 'parent1', password: 'password1', studentInfo: 'Student 1 Info' },
    { username: 'parent2', password: 'password2', studentInfo: 'Student 2 Info' },
    // Add more users as needed
  ];

  const handleLogin = (user) => {
    setCurrentUser(user);
    setIsAuthenticated(true);
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Welcome {currentUser.username}</h1>
          <p>{currentUser.studentInfo}</p>
        </div>
      ) : (
        <Login onLogin={handleLogin} users={users} />
      )}
    </div>
  );
};

export default App;
