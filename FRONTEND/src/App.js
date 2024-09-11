// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RegisterUser from './components/RegisterUser';
import RegisterCoach from './components/RegisterCoach';
import Login from './components/Login';
import Coach from './components/Coach';
import CoachDetail from './components/CoachDetail';
import RegisterSelectPage from './components/RegisterSelectPage';
import ProfileSetup from './components/ProfileSetup';
import AdminDashboard from './components/AdminDashboard';




function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register-select" element={<RegisterSelectPage />} />
          <Route path="/register-user" element={<RegisterUser />} />
          <Route path="/register-coach" element={<RegisterCoach />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/coach" element={<Coach />} />
          <Route path="/coach/:name" element={<CoachDetail />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
