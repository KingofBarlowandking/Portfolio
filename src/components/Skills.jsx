import React from "react";


const Skills = ({ id }) => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-heading">
        <h1>Skills</h1>
      </div>
      <div className="skills-content">
        <div className="skills-text-box">
          <h2>Interpersonal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
          </p>
        </div>
        <div className="skills-text-box">
          <h2>Technical</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;