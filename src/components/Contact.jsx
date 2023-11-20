// Contact.jsx
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
// Function to handle form errors
	const handleInputError = (e) => {
		if (!e.target.value) {
			toast.error('This field is required', {
        style: {
          backgroundColor: '#213D63'
        }
      });
		}
	};

	return (
		<div className='contactContainer'>
			<hr />
			<ToastContainer
				position='bottom-center'
				closeOnClick
				theme='dark'
			/>

			<h1>Contact Me</h1>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label>Name:</label>
					<br />
					<input
						onBlur={(e) => handleInputError(e)}
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
						className='customInput'
					/>
				</div>
				{/* <br /> */}
				<div className='form-group'>
					<label>Email Address:</label>
					<br />
					<input
						onBlur={(e) => handleInputError(e)}
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className='customInput'
					/>
				</div>
				{/* <br /> */}
				<div className='form-group'>
					<label>Message:</label>
					<br />
					<textarea
						rows={5}
						cols={30}
						onBlur={(e) => handleInputError(e)}
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
						className='customInput'></textarea>
				</div>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default Contact;
