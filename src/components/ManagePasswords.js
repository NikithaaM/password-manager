import React, { useState } from 'react';
import axios from 'axios';
import './ManagePasswords.css';  // Add CSS file

const ManagePasswords = () => {
  const [siteName, setSiteName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!siteName || !username || !password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const newPassword = {
        siteName,
        username,
        password,
      };

      // Send a POST request to the backend
      await axios.post('http://localhost:5000/addPassword', newPassword);

      // Reset form fields
      setSiteName('');
      setUsername('');
      setPassword('');

      alert('Password saved successfully');
    } catch (error) {
      console.error('There was an error saving the password:', error);
      alert('Failed to save password');
    }
  };

  return (
    <form className="password-form" onSubmit={onSubmit}>
      <h1>Add Your Passwords</h1>
      <div>
        <label>Site Name</label>
        <input
          type="text"
          placeholder="Enter site name"
          value={siteName}
          onChange={(e) => setSiteName(e.target.value)}
        />
      </div>
      <div>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br></br>
      <div className="submit-button-container">
        <input type="submit" value="Save Password" />
      </div>
    </form>
  );
};

export default ManagePasswords;
