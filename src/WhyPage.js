import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const WhyPage = () => {
    useEffect(() => {
        document.title = 'Why Vedant?';
    }, []); 

    return (
        <div className='profile-container'>
            <h2>Why Choose This</h2>
            <h3>Attention</h3>
            <p>At tutoring companies, tutors are grouped with 4-5 students, and every student gets about 10-15 minutes of true attention. Breaks/ game time took away another 15 minutes. So realistically, you’re paying 4x than what you’re getting out of it.</p>
            <h3>Content</h3>
            <p>They have a set curriculum that all their students follow. However, this is inefficient as this doesn’t lead to much growth- which is exactly what we want. I gauge skill level and provide new sets of questions to master so that the student is constantly growing.</p>
            <h3>Cost</h3>
            <p>Big tutoring companies charge $30-35 starting price for group tutoring (4-5) and that number jumps up to $75 when asked for a one to one session. So, I’ve brought to you that one to one session that you’re looking for, for less than a third of the cost.</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default WhyPage;
