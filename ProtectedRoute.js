import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
        } else {
          const response = await axios.get('/api/auth/user', { headers: { Authorization: `Bearer ${token}` } });
          setUser(response.data);
        }
      } catch (error) {
        console.error('Fetch user failed', error);
        navigate('/login');
      }
    };

    fetchUser();
  }, [navigate]);

  return user ? <h1>Welcome, {user.email}</h1> : <p>Loading...</p>;
};

export default Home;
