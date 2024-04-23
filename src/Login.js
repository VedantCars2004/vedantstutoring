import React, { useState } from 'react';
import firebase from './firebase'; // Ensure this points to your Firebase configuration file
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Login = () => {
 const [loginEmail, setLoginEmail] = useState('');
 const [loginPassword, setLoginPassword] = useState('');
 const [signUpEmail, setSignUpEmail] = useState('');
 const [signUpPassword, setSignUpPassword] = useState('');
 const [error, setError] = useState(null);
 const [activeTab, setActiveTab] = useState('login');
 const navigate = useNavigate(); // Use useNavigate for navigation

 const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword);
      // Redirect to another page after successful login
      navigate('/dashboard'); // Use navigate instead of history.push
    } catch (err) {
      setError(err.message);
    }
 };

 const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().createUserWithEmailAndPassword(signUpEmail, signUpPassword);
      // Optionally, redirect or perform additional actions after successful sign-up
    } catch (err) {
      setError(err.message);
    }
 };

 return (
    <div>
      <h2>Authentication</h2>
      {error && <p>{error}</p>}
      <div>
        <button onClick={() => setActiveTab('login')} className={activeTab === 'login' ? 'active' : ''}>
          Login
        </button>
        <button onClick={() => setActiveTab('signup')} className={activeTab === 'signup' ? 'active' : ''}>
          Sign Up
        </button>
      </div>
      {activeTab === 'login' ? (
        <div>
          <h3>Login</h3>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="loginEmail">Email</label>
              <input
                type="email"
                id="loginEmail"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="loginPassword">Password</label>
              <input
                type="password"
                id="loginPassword"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div>
          <h3>Sign Up</h3>
          <form onSubmit={handleSignUp}>
            <div>
              <label htmlFor="signUpEmail">Email</label>
              <input
                type="email"
                id="signUpEmail"
                value={signUpEmail}
                onChange={(e) => setSignUpEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="signUpPassword">Password</label>
              <input
                type="password"
                id="signUpPassword"
                value={signUpPassword}
                onChange={(e) => setSignUpPassword(e.target.value)}
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      )}
    </div>
 );
};

export default Login;
