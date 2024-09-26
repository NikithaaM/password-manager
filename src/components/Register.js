import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the user data to localStorage (for demo purposes)
    localStorage.setItem('user', JSON.stringify(formData));
    // Redirect to the home page after successful registration
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input type="submit" value="Sign Up" className="btn-submit" />
      </form>
    </div>
  );
}

export default Register;
