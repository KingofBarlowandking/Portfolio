import React from "react";


const Contact = ({ id }) => {
  return (
    <section id="contact" className="contact-section">
      <div className="skills-heading">
        <h1>Contact</h1>
      </div>
      <div className="contact-text-box">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
        </p>
      </div>

      {/* Social Icons */}
      <div className="social-links">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            className="social-icon"
          />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
            alt="Instagram"
            className="social-icon"
          />
        </a>
        <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733544.png"
            alt="Dribbble"
            className="social-icon"
          />
        </a>
        <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
            alt="Email"
            className="social-icon"
          />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
            alt="GitHub"
            className="social-icon"
          />
        </a>
      </div>
    </section>
  );
};

export default Contact;