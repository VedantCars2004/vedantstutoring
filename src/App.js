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
      meetingTimes: ["Monday 6:00 PM CST", "Wednesday 6:00 PM CST"],
      skills: [""],
      payment: 0,
      comments: ""
    },
    {
      username: "Paul",
      password: "student_p",
      meetings: 2,
      meetingTimes: ["Monday 8:00 PM CST", "Thursday 8:00 PM CST"],
      skills: [""],
      payment: 0,
      comments: ""
    },
    {
      username: "Stav",
      password: "student_s",
      meetings: 2,
      meetingTimes: ["Tuesday 10am CST", "Thursday 10am CST"],
      skills: [],
      payment: 60,
      comments: "Payment required before next session"
    },
    {
      username: "Nisank",
      password: "student_n",
      meetings: 2,
      meetingTimes: ["Tuesday 8:00 PM CST", "Thursday 9:00 PM CST"],
      skills: [""],
      payment: 0,
      comments: "This upcoming week, we will be focusing on math"
    },
    {
      username: "Henry",
      password: "student_h",
      meetings: 0,
      meetingTimes: [""],
      skills: [],
      payment: 0,
      comments: "Starting in July..."
    },
    {
      username: "Benjamin",
      password: "student_b",
      meetings: 0,
      meetingTimes: [""],
      skills: [""],
      payment: 0,
      comments: "Starting in July..."
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
      meetings: 0,
      meetingTimes: [""],
      skills: [""],
      payment: 0,
      comments: "Starting in July..."
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