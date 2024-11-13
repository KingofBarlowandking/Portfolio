import React from "react";
import '../styles/projects.css'; // Make sure to import your CSS file

const projectTexts = [
  "Placeholder",
  "Another Placeholder",
  "Yet another placeholder",
  "Another placeholder?",
  "Yeah, another placeholder"
];

const Projects = ({ id }) => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-heading">
      <h1>
          Projects
      </h1>
      </div>
      <div className="projects-text-box">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
        </p>
      </div>

      <div className="projects-grid">
        {projectTexts.map((text, index) => (
          <div 
            key={index}
            className="project-square"
            style={{ backgroundImage: `url(/logo${index + 1}.png)` }}>
            
            <div className="project-text">
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  
  );
};

export default Projects;
