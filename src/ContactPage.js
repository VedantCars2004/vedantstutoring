import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const ContactPage = () => {
    useEffect(() => {
        document.title = 'Contact Vedant';
    }, []); 

    return (
        <div className='profile-container'>
            <h2>Contact Information</h2>
            <p>331-999-4867 (text usually works better at first and then we can set up a phone call)</p>
            <p>vedantuiuc@gmail.com</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default ContactPage;
