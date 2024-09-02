
import React from 'react';
import './CoachDetail.css';
import profile from './profile.jpg';

const CoachDetail = () => {
  return (
    <div className="coach-detail-container">
      <div className="coach-left">
        <img
          src={profile}
          alt="Coach"
          className="coach-image"
        />
        <blockquote className="quote">
          "Take a risk and keep testing, because what works today won’t work tomorrow, but what worked yesterday may work again."
        </blockquote>
      </div>

      <div className="coach-right">
        <h1 className="coach-name">Julie</h1>
        <h2 className="coach-title">Exercise Specialist</h2>

        <div className="bio">
          <h3>Bio</h3>
          <p>
          An experienced fitness coach with over 10 years of experience, specializing in strength training and nutrition. Dedicated to helping clients achieve their fitness goals through personalized workout plans and positive reinforcement.
          </p>
        </div>

        <div className="favourite-brands">
          <h3>Favourite Brands</h3>
          <div className="brands-list">
            <span>SAMSUNG</span>
            <span>Airbnb</span>
            <span>TESLA</span>
            <span>Louis Vuitton</span>
            <span>Nike</span>
          </div>
        </div>

        <div className="goals">
          <h3>Qualifications</h3>
          <ul>
            <li>Testing how well the projects are returning the expected ROI.</li>
            <ul>Certifications:
            <li>NASM Certified Personal Trainer (CPT): A recognized certification demonstrating expertise in designing safe and effective training programs.</li>
            </ul>
          </ul>
        </div>

        <div className="pain-points">
          <h3>Pain Points</h3>
          <ul>
            <li>Needs a clear answer when exploring new avenues.</li>
            <li>Difficulty in finding the right people for the projects.</li>
            <li>Needs stronger CRM to reach potential clients.</li>
            <li>Working on strategies that scale and stick for the long term.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoachDetail;


