import React, { useState, useEffect, useRef, useMemo } from 'react';
import './Schedule.css';

const SchedulingPage = () => {
  const [sessionType, setSessionType] = useState(null);
  const calendarRef = useRef(null);

  const calendlyUrls = useMemo(() => ({
    oneOnOne: "https://calendly.com/vedantuiuc/1-1-tutoring-session?background_color=&text_color=213239&primary_color=c7b198",
    group: "https://calendly.com/vedantuiuc/group-tutoring-sessions?hide_gdpr_banner=1&background_color=&text_color=213239&primary_color=c7b198"
  }), []);

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
      if (calendarRef.current) {
        calendarRef.current.innerHTML = '';
      }

      window.Calendly.initInlineWidget({
        url: calendlyUrls[sessionType],
        parentElement: calendarRef.current,
        prefill: {},
        utm: {}
      });
    }
  }, [sessionType, calendlyUrls]);

  const handleSessionTypeChange = (type) => {
    setSessionType(type);
  };

  return (
    <div className="scheduling-container">
      <div className="scheduling-content">
        <div className="scheduling-left">
          <div className="card-section">
            <h1>SCHEDULE</h1>
          </div>
          <div className="card-section">
            <h2>Select Session Type</h2>
            <div className="button-container">
              <button
                className={`prev-btn ${sessionType === 'oneOnOne' ? 'active' : ''}`}
                onClick={() => handleSessionTypeChange('oneOnOne')}
              >
                1:1 Session
              </button>
              <button
                className={`prev-btn ${sessionType === 'group' ? 'active' : ''}`}
                onClick={() => handleSessionTypeChange('group')}
              >
                Group Session
              </button>
            </div>
          </div>
        </div>

        <div className="scheduling-right">
          <div className="calendar-container" ref={calendarRef} />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>

    </div>
  );
};

export default SchedulingPage;