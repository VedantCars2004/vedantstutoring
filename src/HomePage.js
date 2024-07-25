import React, { useState, useEffect } from 'react';
import './App.css';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Vedant\'s Tutoring';
  }, []);

  const courses = [
    {
      title: 'Digital SAT Course',
      details: [
        'SAT Math (Scored 800/800)',
        'SAT Writing',
        'My students have shown up to 90 points increase after 2 months of tutoring with me.',
      ],
      category: 'digital-sat',
    },
    {
      title: 'Math Courses',
      details: ['Precalc', 'Trigonometry', 'Algebra II & Below...'],
      category: 'math',
    },
    {
      title: 'Computer Science Courses',
      details: [
        'Java',
        'C++',
        'AP Computer Science A/ Princples & Below...',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const subject = "New Contact Form Submission";
    const body = `Name: ${formData.get('name')}
Email: ${formData.get('email')}
Subject of Interest: ${formData.get('subject')}
Message: ${formData.get('message')}`;
    
    window.location.href = `mailto:vedantuiuc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="profile-container">
      <div className="content-wrapper">
        <div className="left-section">
          <div className="card-section">
            <h2>Courses</h2>
            <div className="feature-card-container">
              <div className={`feature-card ${courses[currentCourseIndex].category}`}>
                <h3>{courses[currentCourseIndex].title}</h3>
                <div className="course-details">
                  {courses[currentCourseIndex].details.map((detail, index) => (
                    <p key={index}>{detail}</p>
                  ))}
                </div>
              </div>
              <div className="button-container">
                <button className="prev-btn" onClick={prevCourse}>&#8592; Prev</button>
                <button className="next-btn" onClick={nextCourse}>Next &#8594;</button>
              </div>
            </div>
          </div>

          <div className="card-section">
            <h2>Why This Program</h2>
            <div className="feature-card-container">
              <div className={`feature-card feature-card-${currentFeatureIndex}`}>
                <h3>{features[currentFeatureIndex].title}</h3>
                <p>{features[currentFeatureIndex].content}</p>
              </div>
              <div className="button-container">
                <button className="prev-btn" onClick={prevFeature}>&#8592; Prev</button>
                <button className="next-btn" onClick={nextFeature}>Next &#8594;</button>
              </div>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="card-section welcome-section">
            <h1><strong>WELCOME!</strong></h1>
          </div>
          <div className="contact-form">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="subject">Subject of Interest:</label>
                <select id="subject" name="subject" required>
                  <option value="">Select a subject</option>
                  <option value="SAT">SAT</option>
                  <option value="Math">Math</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;