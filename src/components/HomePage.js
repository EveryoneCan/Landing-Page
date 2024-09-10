import React from 'react';
import './Homepage.css';

const HomePage = () => {
  return (
    <div className="main-content">
      <div className="content-section">
        <div className="text-content">
          <h1>Sample content</h1>
          <p>Sample content</p>
        </div>
        <div className="image-content">
          <img src="phone-image.png" alt="Mobile app interface" className="phone-image" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
