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
      meetings: 3,
      meetingTimes: ["Check Calendly"],
      skills: ["SAT Math U5L1→U5L4", "Notes- SAT Math Review of Practice Test- Geometry. Did- English Inferences (medium & advanced)"],
      payment: 90,
      comments: "much better accuracy on math"
    },
    {
      username: "Paul",
      password: "student_p",
      meetings: 2,
      meetingTimes: ["Check calendly"],
      skills: ["SAT Math U7Q3→U8LQ1", "SAT English U9L1→U10L1"],
      payment: 60,
      comments: "Noticeable improvement in some english skills"
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
      meetings: 1,
      meetingTimes: ["Check calendly"],
      skills: ["SAT Math U7L1→U7L4"],
      payment: 0,
      comments: ""
    },
    {
      username: "Henry",
      password: "student_h",
      meetings: 2,
      meetingTimes: ["Check calendly"],
      skills: ["Did the first unit of SAT Advanced English", "SAT Math U11L8→U12L1"],
      payment: 0,
      comments: "worked together to solve problems and did a great job of explaining his ideas when needed"
    },
    {
      username: "Benjamin",
      password: "student_b",
      meetings: 2,
      meetingTimes: ["Check calendly"],
      skills: ["Did the first unit of SAT Advanced English", "SAT Math U11L8→U12L1"],
      payment: 0,
      comments: "worked together to solve problems and did a great job of explaining his ideas when needed"
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
      meetings: 1,
      meetingTimes: ["Check calendly"],
      skills: [""],
      payment: 30,
      comments: "Resumed this week. Thanks for scheduling sessions in advance"
    },
    {
      username: "Ahana",
      password: "student_a",
      meetings: 2,
      meetingTimes: ["Check calendly"],
      skills: ["Stats U1L1→U1L2", "SAT Math U12L4→U12L13"],
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
    },
    {
      username: "haven",
      password: "student_h",
      meetings: 2,
      meetingTimes: ["Check calendly"],
      skills: ["SAT Math U5Q2→U6L7", "SAT Math U4L11→U5L6", "SAT Math U3Q2→U4L10"],
      payment: 0,
      comments: ""
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