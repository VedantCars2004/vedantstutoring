// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
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
      meetingTimes: ["Monday 11:30 AM CST", "Wednesday  11:30 PM CST", "Friday 11:30 AM CST"],
      skills: ["SAT English U2L1→Complete U2", "SAT Math U7L2→U7L6", "SAT English U3L1→U3UT Complete"],
      payment: 90,
      comments: "Missing very few questions in english, noticeable improvement."
    },
    {
      username: "Paul",
      password: "student_p",
      meetings: 2,
      meetingTimes: ["Monday 9:00 PM CST", "Sunday 9:00 PM CST"],
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
      meetingTimes: ["Monday 8:00 PM CST", "Wednesday 8:00 PM CST"],
      skills: ["SAT Math U6L4→U6L5", "SAT Math U6L5→U6L8"],
      payment: 60,
      comments: "Covered very few questions on day 1, faster paced on day 2. Need to continue working on timing with math questions"
    },
    {
      username: "Henry",
      password: "student_h",
      meetings: 2,
      meetingTimes: ["Monday 7pm CST, Thursday 7pm CST"],
      skills: [""],
      payment: 0,
      comments: "Doing practice to guage level before beginning Khan Academy practice"
    },
    {
      username: "Benjamin",
      password: "student_b",
      meetings: 2,
      meetingTimes: ["Monday 7pm CST", "Thursday 7pm CST"],
      skills: ["Advanced Algebra Skills U10"],
      payment: 0,
      comments: "Needed some refreshers on some key math concepts asked on the SAT, learned quickly"
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
      meetingTimes: [],
      skills: ["SAT Math U11Q1→U11L8", "SAT Math U11L9→U12Q1"],
      payment: 60,
      comments: "Very few missed questions in math, needed more help with stats/ distributions questions"
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
      meetingTimes: ["Wednesday 7pm CST, Thursday 8pm CST"],
      skills: [],
      payment: 0,
      comments: "Starting this week"
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
<Route path="/schedule" element={<SchedulingForm />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;