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
      meetings: 3,
      meetingTimes: ["Monday 10:00 AM CST", "Wednesday  8:00 PM CST", "Friday 10:00 AM CST"],
      skills: ["SAT English U2L1→Complete U2"],
      payment: 0,
      comments: ""
    },
    {
      username: "Paul",
      password: "student_p",
      meetings: 2,
      meetingTimes: ["Monday 9:00 PM CST", "Friday 9:00 PM CST"],
      skills: ["SAT Math U6Q2→U7L3"],
      payment: 0,
      comments: ""
    },
    {
      username: "Stav",
      password: "student_s",
      meetings: 0,
      meetingTimes: [""],
      skills: [""],
      payment: 0,
      comments: ""
    },
    {
      username: "Nisank",
      password: "student_n",
      meetings: 2,
      meetingTimes: ["Monday 8:00 PM CST", "Tuesday 9:00 PM CST"],
      skills: ["SAT Math U6L4→U6L5"],
      payment: 0,
      comments: ""
    },
    {
      username: "Henry",
      password: "student_h",
      meetings: 2,
      meetingTimes: ["Tuesday 7pm CST, Thursday 7pm CST"],
      skills: ["SAT Practice Test"],
      payment: 0,
      comments: ""
    },
    {
      username: "Benjamin",
      password: "student_b",
      meetings: 1,
      meetingTimes: ["Thursday 7pm CST"],
      skills: [""],
      payment: 0,
      comments: ""
    },
    {
      username: "Devarsh",
      password: "student_d",
      meetings: 0,
      meetingTimes: [""],
      skills: [""],
      payment: 0,
      comments: ""
    },
    {
      username: "Ashwath",
      password: "student_a",
      meetings: 0,
      meetingTimes: [],
      skills: [""],
      payment: 0,
      comments: "On Vacation..."
    },
    {
      username: "Ahana",
      password: "student_a",
      meetings: 2,
      meetingTimes: ["Tuesday 6pm CST", "Thursday 6pm CST"],
      skills: ["SAT Math U11Q1→U11L8"],
      payment: 0,
      comments: ""
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
      alert('Invalid username or password. Please be careful about case sensitivity.');
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