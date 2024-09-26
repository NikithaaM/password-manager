import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/HomePage';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';  // Import the Dashboard component
import ManagePasswords from './components/ManagePasswords';
import ProfilePage from './components/ProfilePage';
import Retrieve from './components/Retrieve';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* Add the Dashboard route */}
          <Route path="/manage-passwords" element={<ManagePasswords />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/retrieve" element={<Retrieve />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
