import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Retrieve.css';

const RetrievePasswords = () => {
  const [passwords, setPasswords] = useState([]);

  useEffect(() => {
    const fetchPasswords = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getPasswords');
        console.log('Fetched Passwords:', response.data); // Debugging log
        setPasswords(response.data);
      } catch (error) {
        console.error('There was an error retrieving the passwords:', error);
      }
    };

    fetchPasswords();
  }, []);

  const deletePassword = async (id) => {
    try {
      console.log('Deleting password with ID:', id); // Debugging log
      await axios.delete(`http://localhost:5000/deletePassword/${id}`);
      setPasswords(passwords.filter(password => password._id !== id));
    } catch (error) {
      console.error('There was an error deleting the password:', error);
    }
  };

  return (
    <div>
      <h2>Saved Passwords</h2>
      <table>
        <thead>
          <tr>
            <th>Site Name</th>
            <th>Username</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {passwords.map((password, index) => (
            <tr key={index}>
              <td>{password.siteName}</td>
              <td>{password.username}</td>
              <td>{password.password}</td>
              <td>
                <button onClick={() => deletePassword(password._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RetrievePasswords;
