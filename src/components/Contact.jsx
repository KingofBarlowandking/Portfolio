import React from "react";


const Contact = ({ id }) => {
  return (
    <section id="contact" className="contact-section">
      <div className="skills-heading">
        <h1>Contact</h1>
      </div>
      <div className="contact-text-box">
        <p>
          Get in contact and view additional work through the below links.
        </p>
        <p>
          If you would like a copy of my resume please contact me via email.
        </p>
      </div>

      {/* Social Icons */}
      <div className="social-links">
        {/*<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">*/}
          {/*<img*}
            {/*src="https://cdn-icons-png.flaticon.com/512/174/174857.png"*/}
            {/*alt="LinkedIn"*/}
           {/*className="social-icon"*/}
          {/*/>*/}
        {/*</a>*/}
        <a href="https://dribbble.com/mralexjamesking" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733544.png"
            alt="Dribbble"
            className="social-icon"
          />
        </a>
        <a href="mailto:mralexjamesking@gmail.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
            alt="Email"
            className="social-icon"
          />
        </a>
        <a href="https://github.com/KingofBarlowandking/Portfolio" target="_blank" rel="noopener noreferrer">
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