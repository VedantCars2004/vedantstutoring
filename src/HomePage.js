import React, { useState, useEffect, useRef } from 'react';
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
        'Scored 800/800 on the SAT Math',
        'My students have shown upto 90 points increase after 2 months of tutoring with me.',
      ],
      category: 'digital-sat',
    },
    {
      title: 'Math Courses',
      details: ['Precalc', 'Trignometry', 'Algebra II', 'Algebra I and below...'],
      category: 'math',
    },
    {
      title: 'Computer Science Courses',
      details: [
        'Java',
        'C++',
        'AP Computer Science A',
        'AP Computer Science Principles',
      ],
      category: 'computer-science',
    },
  ];

  const features = [
    {
      title: 'Attention',
      content:
        'At tutoring companies, tutors are grouped with 4-5 students, and every student gets about 10-15 minutes of true attention. Breaks/ game time take away another 15 minutes. So realistically, you\'re paying 4x than what you\'re getting out of it.',
    },
    {
      title: 'Content',
      content:
        'They have a set curriculum that all their students follow. However, this is inefficient as this doesn\'t lead to much growth- which is exactly what we want. I gauge skill level and provide new sets of questions to master so that the student is constantly growing.',
    },
    {
      title: 'Cost',
      content:
        'Big tutoring companies charge $30-35 starting price for group tutoring (4-5) and that number jumps up to $75 when asked for a one to one session. So, I\'ve brought to you that one to one session that you\'re looking for, for less than a third of the cost.',
    },
  ];

  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const cardRef = useRef(null);

  const nextCourse = () => {
    setCurrentCourseIndex((prevIndex) => (prevIndex + 1) % courses.length);
  };

  const prevCourse = () => {
    setCurrentCourseIndex(
      (prevIndex) => (prevIndex - 1 + courses.length) % courses.length
    );
  };

  const nextFeature = () => {
    setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentFeatureIndex(
      (prevIndex) => (prevIndex - 1 + features.length) % features.length
    );
  };

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.height = `${cardRef.current.scrollHeight}px`;
    }
  }, [currentCourseIndex, currentFeatureIndex]);

  return (
    <div className="profile-container">
      <h1>Welcome to Vedant's Tutoring</h1>
      
      <hr />
     
      <h2>Courses</h2>
      <div className="feature-card-container" ref={cardRef}>
        <div className={`feature-card ${courses[currentCourseIndex].category}`}>
          <h3>{courses[currentCourseIndex].title}</h3>
          <br />
          <div className="course-details">
            {courses[currentCourseIndex].details.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
          </div>
        </div>
        <div className="button-container">
          <button className="prev-btn" onClick={prevCourse}>
            &#8592; Prev
          </button>
          <button className="next-btn" onClick={nextCourse}>
            Next &#8594;
          </button>
        </div>
      </div>

      
      <br />
      <hr />
    
      <h2>Why This Program</h2>

      <div className="feature-card-container" ref={cardRef}>
        <div className={`feature-card feature-card-${currentFeatureIndex}`}>
          <h3>{features[currentFeatureIndex].title}</h3>
          <br />
          <p>{features[currentFeatureIndex].content}</p>
        </div>
        <div className="button-container">
          <button className="prev-btn" onClick={prevFeature}>
            &#8592; Prev
          </button>
          <button className="next-btn" onClick={nextFeature}>
            Next &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
