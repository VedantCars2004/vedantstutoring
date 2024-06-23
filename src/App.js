// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import LoginPage from './Login';
import Navbar from './Navbar';
import Footer from './Footer';
import DashboardPage from './Dashboard';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const users = [
    {
      username: "Vinay",
      password: "student_v",
      meetings: 2,
      meetingTimes: ["Monday 4:00 PM", "Thursday 5:00 PM"],
      skills: ["Math", "Science"],
      payment: 100,
      comments: "Great progress in math this week!"
    },
    {
      username: "Paul",
      password: "student_p",
      meetings: 1,
      meetingTimes: ["Wednesday 3:30 PM"],
      skills: ["English", "History"],
      payment: 50,
      comments: "Needs to focus more on essay writing."
    },
    {
      username: "Stav",
      password: "student_s",
      meetings: 3,
      meetingTimes: ["Monday 2:00 PM", "Wednesday 4:00 PM", "Friday 3:00 PM"],
      skills: ["Physics", "Chemistry"],
      payment: 150,
      comments: "Excellent work on the latest lab report."
    },
    {
      username: "Nisank",
      password: "student_n",
      meetings: 2,
      meetingTimes: ["Tuesday 5:00 PM", "Thursday 4:30 PM"],
      skills: ["Computer Science", "Math"],
      payment: 100,
      comments: "Making good progress in programming concepts."
    },
    {
      username: "Henry",
      password: "student_h",
      meetings: 1,
      meetingTimes: ["Friday 4:00 PM"],
      skills: ["Art", "Design"],
      payment: 50,
      comments: "Showed great creativity in the latest project."
    },
    {
      username: "Benjamin",
      password: "student_b",
      meetings: 2,
      meetingTimes: ["Monday 3:00 PM", "Thursday 3:30 PM"],
      skills: ["Music", "Drama"],
      payment: 100,
      comments: "Excellent performance in the recent recital."
    },
    {
      username: "Devarsh",
      password: "student_d",
      meetings: 3,
      meetingTimes: ["Tuesday 4:00 PM", "Wednesday 5:00 PM", "Friday 3:30 PM"],
      skills: ["Biology", "Environmental Science"],
      payment: 150,
      comments: "Great enthusiasm for the ecosystem project."
    },
    {
      username: "Ashwath",
      password: "student_a",
      meetings: 2,
      meetingTimes: ["Monday 5:00 PM", "Wednesday 4:30 PM"],
      skills: ["Economics", "Statistics"],
      payment: 100,
      comments: "Showing improvement in data analysis skills."
    },
    {
      username: "Ahana",
      password: "student_a",
      meetings: 1,
      meetingTimes: ["Thursday 3:00 PM"],
      skills: ["Literature", "Creative Writing"],
      payment: 50,
      comments: "Wrote an impressive short story this week."
    },
    {
      username: "test",
      password: "student_t",
      meetings: 0,
      meetingTimes: [],
      skills: [],
      payment: 0,
      comments: "Test account for system verification."
    }
  ];

  const handleLogin = (username, password) => {
    const foundUser = users.find(user => user.username === username && user.password === password);
    
    if (foundUser) {
      setAuthenticated(true);
      setCurrentUser(foundUser);
      return true; // Successful login
    } else {
      setAuthenticated(false);
      setCurrentUser(null);
      alert('Invalid username or password.');
      return false; // Failed login
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setCurrentUser(null);
  };

  return (
    <Router>
      <div className="app">
        <Navbar authenticated={authenticated} onLogout={handleLogout} />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/login"
              element={<LoginPage onLogin={handleLogin} />}
            />
            <Route
  path="/dashboard"
  element={
    authenticated ? (
      <DashboardPage currentUser={currentUser} />
    ) : (
      <Navigate to="/login" replace />
    )
  }
/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;