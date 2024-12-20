import React from 'react';



const Hero = ({ id }) => {
  return (
    <section id="me" className="hero-section">
      <div className="hero-container">
        
        <div className="text-container">
          <div className="text-box">
            <h1>Alex King</h1>
            <p>UI/UX designer</p>
          </div>
          <div className="links-container">
            <a href="https://dribbble.com/mralexjamesking" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733544.png" alt="Dribbble" className="social-logo" />
            </a>
            <a href="https://github.com/KingofBarlowandking/Portfolio" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" className="social-logo" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
