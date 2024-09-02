
// import React from 'react';
// import './CoachDetail.css';
// import profile from './profile.jpg';

// const CoachDetail = () => {
//   return (
//     <div className="coach-detail-container">
//       <div className="coach-left">
//         <img
//           src={profile}
//           alt="Coach"
//           className="coach-image"
//         />
//         <blockquote className="quote">
//           "Take a risk and keep testing, because what works today won’t work tomorrow, but what worked yesterday may work again."
//         </blockquote>
//       </div>

//       <div className="coach-right">
//         <h1 className="coach-name">Julie</h1>
//         <h2 className="coach-title">Exercise Specialist</h2>

//         <div className="bio">
//           <h3>Bio</h3>
//           <p>
//           An experienced fitness coach with over 10 years of experience, specializing in strength training and nutrition. Dedicated to helping clients achieve their fitness goals through personalized workout plans and positive reinforcement.
//           </p>
//         </div>

//         <div className="favourite-brands">
//           <h3>Favourite Brands</h3>
//           <div className="brands-list">
//             <span>SAMSUNG</span>
//             <span>Airbnb</span>
//             <span>TESLA</span>
//             <span>Louis Vuitton</span>
//             <span>Nike</span>
//           </div>
//         </div>

//         <div className="goals">
//           <h3>Qualifications</h3>
//           <ul>
//             <li>Testing how well the projects are returning the expected ROI.</li>
//             <ul>Certifications:
//             <li>NASM Certified Personal Trainer (CPT): A recognized certification demonstrating expertise in designing safe and effective training programs.</li>
//             </ul>
//           </ul>
//         </div>

//         <div className="pain-points">
//           <h3>Pain Points</h3>
//           <ul>
//             <li>Needs a clear answer when exploring new avenues.</li>
//             <li>Difficulty in finding the right people for the projects.</li>
//             <li>Needs stronger CRM to reach potential clients.</li>
//             <li>Working on strategies that scale and stick for the long term.</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoachDetail;



// import React from "react";
import "./CoachDetail.css";
import profile from './profile.jpg';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

    function CoachDetail() {
      const navigate = useNavigate();
      const [showForm, setShowForm] = useState(false);
    
      const handleSendRequest = () => {
        navigate('/profile-setup'); 
      };
    return (
      <div className="profile-card">
      <div className="profile-container">
        <div className="left-side">
          <div className="profile-picture">
            <img src={profile} alt="Profile" />
          </div>
          <h2>John Doe</h2>
          <h3>Fitness Coach</h3>
          <div className="details">
            <p><strong>Age:</strong> 35</p>
            <p><strong>Education:</strong> B.S. in Sports Science</p>
            <p><strong>Location:</strong> Los Angeles, CA</p>
          </div>
          <div className="buttons-row">
          <button className="follow-button">Follow</button>
          <button className="send-request-button" onClick={handleSendRequest}>Send Request</button>
        </div>
        
        </div>
        <div className="right-side">
          <div className="card">
            <h4>Bio</h4>
            <p>John Doe is a certified fitness coach with over 10 years of experience in helping clients achieve their health and fitness goals. He specializes in weight training, cardio, and nutrition planning.</p>
          </div>
          <div className="card">
            <h4>Qualifications</h4>
            <p>Certified Strength and Conditioning Specialist (CSCS), NASM Certified Personal Trainer, and Nutrition Specialist.</p>
          </div>
          <div className="card">
            <h4>Coaching Style</h4>
            <p>John focuses on personalized workout plans tailored to individual needs, with an emphasis on sustainable lifestyle changes and holistic health.</p>
          </div>
          <div className="card">
            <h4>Availability</h4>
            <p>Available for one-on-one coaching sessions during weekdays and weekends, both in-person and online.</p>
          </div>
        </div>
      </div>
      </div>
    );
  }
  
 

export default CoachDetail;

