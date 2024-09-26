import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const navigate = useNavigate(); // Hook to programmatically navigate

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    alert('Logout successful');
    navigate('/');
  };

  const handleStart = () => {
    navigate('/manage-passwords');
  };

  return (
    <div className="dashboard-container">
      <div className="hamburger-menu" onClick={toggleSidebar}>
        &#9776;
      </div>

      <div className={`sidebar ${isSidebarVisible ? 'visible' : 'hidden'}`}>
        <ul>
          <li><a href="/manage-passwords">Manage Passwords</a></li>
          <li><a href="/retrieve">Retrieve Password</a></li>
          <li>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>

      <div className="dashboard-content">
        <div className="webcard">
          <h1>Welcome to Your Password Vault</h1>
          <p>Our Password Manager application is a user-friendly and secure tool designed to simplify the way you manage your passwords. With features like secure storage, easy retrieval, and seamless management of your login credentials, the app ensures that your data is protected and easily accessible.</p>
          <p>Built with modern web technologies like React.js and Node.js, and backed by a robust MongoDB database, this app offers a reliable solution for keeping your digital life organized and secure. Whether you're adding new credentials, managing existing ones, or retrieving forgotten passwords, our application makes it easy and safe.</p>
          <button className="start-button" onClick={handleStart}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
