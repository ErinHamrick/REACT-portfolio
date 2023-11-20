// Contact.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './Contact.css'; // Import your CSS file

const Contact = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    if (!name || !email || !message) {
      toast.error('All fields are required');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Invalid email address');
      return;
    }

    // Add logic to handle form submission (e.g., send data to server)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <div className='contactContainer'>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
        <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className='customInput'
          />
        </div>
        <br />
        <div className="form-group">
          <label>Email Address:</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='customInput'
          />
        </div>
        <br />
        <div className="form-group">
          <label>Message:</label>
          <br />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className='customInput'
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;

