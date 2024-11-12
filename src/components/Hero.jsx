import React from 'react';

const Hero = ({ id }) => {
  return (
    <section id="me" className="about-section">
      <div className="hero-container">
        <div className="photo-container">
          <img src="your-photo.jpg" alt="photo" className="photo" />
        </div>
        <div className="text-container">
          <div className="text-box">
            <h1>Alex King</h1>
            <p>UI/UX designer</p>
          </div>
          <div className="links-container">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
