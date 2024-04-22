import React, { useState } from 'react';
import './App.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, course } = formData;
    const body = `Name: ${name}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0ASubject: ${course}`;
    const mailtoLink = `mailto:vedantuiuc@gmail.com?subject=Reaching out regarding tutoring...&body=${body}`;
    window.open(mailtoLink);
    setFormData({ name: '', phone: '', email: '', course: ''}); 
  };

  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>
      <h3>Contact me through the form below, or the following options:</h3>
      <br></br>
      <ul>
        <li>Text- 331-999-4867 → Text works better at first, then we can set up a phone call.</li>
        <br></br>
        <li>Email- vedantuiuc@gmail.com</li>
      </ul>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="course">Course:</label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;