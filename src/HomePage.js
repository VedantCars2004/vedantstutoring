import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const HomePage = () => {
    useEffect(() => {
        document.title = 'Vedant\'s Tutoring';
    }, []);

    const courses = [
        {
            title: 'Digital SAT Course',
            details: [
                'SAT Math',
                'SAT Writing',
                'I myself got a 800/800 on the SAT Math when I took it.',
                'My students have shown upto 190 points increase after 2 months of tutoring with me.'
            ],
            category: 'digital-sat'
        },
        {
            title: 'Math Courses',
            details: [
                'Precalc',
                'Trignometry',
                'Algebra II',
                'Algebra I and below...'
            ],
            category: 'math'
        },
        {
            title: 'Computer Science Courses',
            details: [
                'Java',
                'C++',
                'AP Computer Science A',
                'AP Computer Science Principles'
            ],
            category: 'computer-science'
        }
    ];

    const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
    const cardRef = useRef(null);

    const nextCourse = () => {
        setCurrentCourseIndex((prevIndex) => (prevIndex + 1) % courses.length);
    };

    const prevCourse = () => {
        setCurrentCourseIndex((prevIndex) => (prevIndex - 1 + courses.length) % courses.length);
    };

    useEffect(() => {
        if (cardRef.current) {
            cardRef.current.style.height = `${cardRef.current.scrollHeight}px`;
        }
    }, [currentCourseIndex]);

    return (
        <div className='profile-container'>
            <h1>Welcome to Vedant's Tutoring</h1>
            <p>EVERY COURSE AT $30/hr.</p>
            <p>I encourage exploring this page, it only takes 5 minutes and can be vital to your future success.</p>
            <br></br>
            <div className="course-card-container" ref={cardRef}>
                <div className={`course-card ${courses[currentCourseIndex].category}`}>
                    <h3>{courses[currentCourseIndex].title}</h3>
                    <div className="course-details">
                        {courses[currentCourseIndex].details.map((detail, index) => (
                            <p key={index}>{detail}</p>
                        ))}
                    </div>
                </div>
                <div className="button-container">
                    <button className="prev-btn" onClick={prevCourse}>&#8592;</button>
                    <button className="next-btn" onClick={nextCourse}>&#8594;</button>
                </div>
            </div>
            <br></br>
            <br></br>
            <Link to="/why">Read more about why to choose me</Link>
        </div>
    );
};

export default HomePage;
