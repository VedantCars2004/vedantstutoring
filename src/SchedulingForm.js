import React, { useState, useEffect, useRef } from 'react';

const SchedulingPage = () => {
  const [sessionType, setSessionType] = useState(null);
  const calendarRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (sessionType && window.Calendly) {
      // Clear the existing widget
      if (calendarRef.current) {
        calendarRef.current.innerHTML = '';
      }

      // Initialize the new widget
      window.Calendly.initInlineWidget({
        url: calendlyUrls[sessionType],
        parentElement: calendarRef.current,
        prefill: {},
        utm: {}
      });
    }
  }, [sessionType]);

  const calendlyUrls = {
    oneOnOne: "https://calendly.com/vedantuiuc/1-1-tutoring-session?background_color=&text_color=213239&primary_color=c7b198",
    group: "https://calendly.com/vedantuiuc/group-tutoring-sessions?hide_gdpr_banner=1&background_color=&text_color=213239&primary_color=c7b198"
  };

  const handleSessionTypeChange = (type) => {
    setSessionType(type);
  };

  const styles = {
    schedulingPage: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
    },
    h1: {
      textAlign: 'center',
      color: '#213239',
    },
    hr: {
      border: '1px solid #c7b198',
      margin: '20px 0',
    },
    sessionTypeSelection: {
      textAlign: 'center',
    },
    h2: {
      color: '#213239',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginTop: '20px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      backgroundColor: '#c7b198',
      color: 'white', // Changed to white
      border: 'none',
      borderRadius: '5px',
      transition: 'background-color 0.3s',
      width: '150px',
    },
    calendarContainer: {
      marginTop: '20px',
    },
  };

  // New hover styles
  const [hoveredButton, setHoveredButton] = useState(null);

  const buttonHoverStyle = {
    backgroundColor: '#596E79',
  };

  return (
    <div style={styles.schedulingPage}>
      <h1 style={styles.h1}>Schedule a Tutoring Session</h1>
      <hr style={styles.hr} />
      <div style={styles.sessionTypeSelection}>
        <h2 style={styles.h2}>Select Session Type:</h2>
        <hr style={styles.hr} />
        <div style={styles.buttonContainer}>
          <button 
            style={{
              ...styles.button,
              ...(hoveredButton === 'oneOnOne' ? buttonHoverStyle : {})
            }}
            onClick={() => handleSessionTypeChange('oneOnOne')}
            onMouseEnter={() => setHoveredButton('oneOnOne')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            1:1 Session
          </button>
          <button 
            style={{
              ...styles.button,
              ...(hoveredButton === 'group' ? buttonHoverStyle : {})
            }}
            onClick={() => handleSessionTypeChange('group')}
            onMouseEnter={() => setHoveredButton('group')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Group Session
          </button>
        </div>
      </div>
      <div 
        ref={calendarRef}
        style={{ ...styles.calendarContainer, minWidth: "400px", height: "700px" }}
      />
    </div>
  );
};

export default SchedulingPage;