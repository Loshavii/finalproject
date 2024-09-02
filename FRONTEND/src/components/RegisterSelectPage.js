


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/RegisterSelectPage.css'; // Import the CSS file

function RegisterSelectPage() {
  const navigate = useNavigate();

  const handleCoachRegister = () => {
    navigate('/register-coach');
  };

  const handleUserRegister = () => {
    navigate('/register-user');
  };

  return (
    <div className="register-select-container">
      <h2 className="register-select-heading">Select Your Role</h2>
      <div className="register-select-buttons">
        <button className="register-button coach-button" onClick={handleCoachRegister}>
          Register as a Coach
        </button>
        <button className="register-button user-button" onClick={handleUserRegister}>
          Register as a User
        </button>
      </div>
    </div>
  );
}

export default RegisterSelectPage;