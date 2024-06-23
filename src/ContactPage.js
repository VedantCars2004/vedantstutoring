import React, { useState, useEffect } from 'react';
import './Contact.css';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Vedant';
  }, []);

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
      <h1 className="section-title">Contact</h1>
      <hr></hr>
      <p>Alternatively, leave a message at 331-999-4867 or vedantuiuc@gmail.com</p>
      <form className="contact-form" onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
