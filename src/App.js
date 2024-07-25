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
      meetingTimes: ["Check Calendly + Tuesday 11am CST"],
      skills: ["SAT Math U7L6→U7L8", "SAT English U4L1→U5L1", "SAT English U11L1→ U11L7"],
      payment: 90,
      comments: "Struggled a little bit on percentages, good with scatterplots, talked about & explained what he missed on Practice Test and did more of those types of questions"
    },
    {
      username: "Paul",
      password: "student_p",
      meetings: 2,
      meetingTimes: ["Check calendly"],
      skills: ["SAT English U6L1→U7UT", "SAT Math U7Q1→U7L10"],
      payment: 90,
      comments: "missed some questions on linear/ exponential growth so we did extra practice on that"
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
      skills: ["SAT Math U6L4→U6L5", "SAT Math U6L5→U6L8"],
      payment: 60,
      comments: "did pretty good on finding main idea, struggled a little bit on two passages compare and contrast"
    },
    {
      username: "Henry",
      password: "student_h",
      meetings: 2,
      meetingTimes: ["Check calendly"],
      skills: ["SAT Math U11L1→U11L8"],
      payment: 0,
      comments: "worked together to solve problems and did a great job of explaining his ideas when needed"
    },
    {
      username: "Benjamin",
      password: "student_b",
      meetings: 2,
      meetingTimes: ["Check calendly"],
      skills: ["SAT Math U11L1→U11L8"],
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
      meetingTimes: ["Check calendly"],
      skills: [""],
      payment: 60,
      comments: "Had no sessions this week"
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
      skills: ["SAT Math U3L1→ U3L10", "SAT Math U2L1→U2UT"],
      payment: 0,
      comments: "did really well on beginner algebra skills, not missing any questions; pretty good accuracy, missed a couple questions about linear/ exponential growth"
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