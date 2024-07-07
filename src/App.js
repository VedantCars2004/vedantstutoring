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
      meetings: 4,
      meetingTimes: ["Monday 10:00 AM CST", "Wednesday  8:00 PM CST", "Friday 10:00 AM CST"],
      skills: ["SAT English Course Challenge (Need working on evidence reading questions, identifying subject modifier place.)", "SAT Math Unit 6 Quiz 2→ Unit 7 Lesson 1", "SAT Math Unit 7 Lesson 2→Unit 7 Lesson 4, Struggled a bit with unit conversions but did really well (missed no questions) on the stats questions (median, mode, range, mean)"],
      payment: $90,
      comments: "Payment due from last week"
    },
    {
      username: "Paul",
      password: "student_p",
      meetings: 2,
      meetingTimes: ["Monday 9:00 PM CST", "Friday 9:00 PM CST"],
      skills: ["SAT English U4L1→U5UT"],
      payment: $30,
      comments: "Payment due from last week"
    },
    {
      username: "Stav",
      password: "student_s",
      meetings: 0,
      meetingTimes: [""],
      skills: ["SAT English U3L2→U4L2"],
      payment: 60,
      comments: "Payment due from last week"
    },
    {
      username: "Nisank",
      password: "student_n",
      meetings: 2,
      meetingTimes: ["Monday 8:00 PM CST", "Tuesday 9:00 PM CST"],
      skills: ["SAT Math U5L4→U6L2", "SAT Math U6L3→U6L4 (A little bit of slow progress here on skills such as linear inequalities)"],
      payment: $90,
      comments: "Payment due from last week"
    },
    {
      username: "Henry",
      password: "student_h",
      meetings: 0,
      meetingTimes: [""],
      skills: [],
      payment: 0,
      comments: "Starting soon"
    },
    {
      username: "Benjamin",
      password: "student_b",
      meetings: 0,
      meetingTimes: [""],
      skills: [""],
      payment: 0,
      comments: "Starting soon"
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
      skills: ["SAT Math U10L1→U10Q2", "SAT Math U10Q2→U11L4"],
      payment: $60,
      comments: "Payment due from last week"
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