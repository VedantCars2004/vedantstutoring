import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const HomePage = () => {
    useEffect(() => {
        document.title = 'Vedant\'s Tutoring';
    }, []); 
   return (
       <div className='profile-container'>
            <h3>Hello World</h3>
       </div>
   );
};


export default HomePage;

