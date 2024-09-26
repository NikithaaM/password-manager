import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/image.png';
import './Homepage.css';

function Homepage() {
  return (
    <div className="container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <h1>Welcome to your Password Manager</h1>
      <p>
        Manage your saved passwords in Android or Chrome. They’re securely stored
        in your Google Account and available across all your devices.
      </p>

      <h2>Password Checkup</h2>
      <p>
        Check the strength and security of your saved passwords. Find out if
        they’ve been compromised and get personalized advice when you need it.
      </p>

      <Link to="/login" className="btn-signin">
        Sign in
      </Link>
      <br />
      <Link to="/register" className="create-account">
        Create an Account
      </Link>
    </div>
  );
}

export default Homepage;
