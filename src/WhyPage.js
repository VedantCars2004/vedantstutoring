import React, { useState, useEffect, useRef } from 'react';

import './App.css';

const WhyPage = () => {
  useEffect(() => {
    document.title = 'Why Vedant?';
  }, []);

  const features = [
    {
      title: 'Attention',
      content: 'At tutoring companies, tutors are grouped with 4-5 students, and every student gets about 10-15 minutes of true attention. Breaks/ game time take away another 15 minutes. So realistically, you\'re paying 4x than what you\'re getting out of it.',
    },
    {
      title: 'Content',
      content: 'They have a set curriculum that all their students follow. However, this is inefficient as this doesn\'t lead to much growth- which is exactly what we want. I gauge skill level and provide new sets of questions to master so that the student is constantly growing.',
    },
    {
      title: 'Cost',
      content: 'Big tutoring companies charge $30-35 starting price for group tutoring (4-5) and that number jumps up to $75 when asked for a one to one session. So, I\'ve brought to you that one to one session that you\'re looking for, for less than a third of the cost.',
    },
  ];

  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const cardRef = useRef(null);

  const nextFeature = () => {
    setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentFeatureIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
  };

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.height = `${cardRef.current.scrollHeight}px`;
    }
  }, [currentFeatureIndex]);

  return (
    <div className="profile-container">
      <h2>Why Choose This</h2>
      <div className="course-card-container" ref={cardRef}> 
        <div className={`course-card feature-card-${currentFeatureIndex}`}>
          <h3>{features[currentFeatureIndex].title}</h3>
          <p>{features[currentFeatureIndex].content}</p>
        </div>
        <div className="button-container">
          <button className="prev-btn" onClick={prevFeature}>
            &#8592;
          </button>
          <button className="next-btn" onClick={nextFeature}>
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyPage;