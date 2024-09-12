import React from 'react';
import '../assets/styles/HomePage.css';
import phone from '../assets/images/phone.png'; 
const HomePage = () => {
  return (
    <div className="main-content">
      <div className="content-section">
        <div className="text-content">
          <h1>Dummy content</h1>
          <p>Dummy content</p>
        </div>
        <div className="image-content">
          <img src={phone} alt="phone" className="phone-image" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
