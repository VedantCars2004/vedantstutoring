// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './HomePage';

import LoginPage from './Login';
import Navbar from './Navbar';
import Footer from './Footer';
import DashboardPage from './Dashboard';
import SchedulingForm from './SchedulingForm';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const users = [
    {
      username: "Vinay",
      password: "student_v",
      meetingTimes: ["Check Calendly"],
      skills: ["SAT English U11L8→U11UT", "SAT Math U5Q1→U5UT", "SAT English U2L1→U2UT"],
      payment: 90,
      comments: "Great work on english"
    },
    {
      username: "Paul",
      password: "student_p",
      meetingTimes: ["Check calendly"],
      skills: [" SAT Math U8L5→U8L8", "SAT English U10L2→U11Q2"],
      payment: 60,
      comments: "Noticeable improvement in some english skills"
    },
    {
      username: "Stav",
      password: "student_s",
      meetingTimes: [""],
      skills: [""],
      payment: 0,
      comments: ""
    },
    {
      username: "Nisank",
      password: "student_n",
      meetingTimes: ["Check calendly"],
      skills: ["SAT English U7L1→U7UT"],
      payment: 0,
      comments: ""
    },
    {
      username: "Henry",
      password: "student_h",
      meetingTimes: ["Check calendly"],
      skills: ["SAT English U9L1→U9UT, Math U12L2→U12L3", "SAT English U10L1→End of English"],
      payment: 50,
      comments: "worked together to solve problems and did a great job of explaining his ideas when needed"
    },
    {
      username: "Benjamin",
      password: "student_b",
      meetingTimes: ["Check calendly"],
      skills: ["SAT English U9L1→U9UT, Math U12L2→U12L3", "SAT English U10L1→End of English"],
      payment: 25,
      comments: "worked together to solve problems and did a great job of explaining his ideas when needed"
    },
    {
      username: "Anchit",
      password: "student_a",
      meetingTimes: ["Check calendly"],
      skills: [""],
      payment: 0,
      comments: "first session oon Monday"
    },
    {
      username: "Ashwath",
      password: "student_a",
      meetingTimes: ["Check calendly"],
      skills: ["SAT Math Mean, Median, Mode, SD U11L4"],
      payment: 0,
      comments: "Worked on median, mode, mean skills"
    },
    {
      username: "Ahana",
      password: "student_a",
      meetingTimes: ["Check calendly"],
      skills: ["SAT Math U12Q3→U13Q1"],
      payment: 30,
      comments: ""
    },
    {
      username: "test",
      password: "student_t",
      meetingTimes: [],
      skills: [],
      payment: 0,
      comments: "Test account for system verification."
    },
    {
      username: "haven",
      password: "student_h",
      meetingTimes: ["Check calendly"],
      skills: ["SAT Math U6L8→U7L4", "SAT Math U5Q2→U6L7", "SAT Math U4L11→U5L6"],
      payment: 0,
      comments: "Great job on math"
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
<Route path="/schedule" element={<SchedulingForm />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;