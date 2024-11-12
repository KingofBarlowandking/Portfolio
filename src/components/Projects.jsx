import React from "react";
import '../styles/projects.css'; // Make sure to import your CSS file

const Projects = ({ id }) => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-text-box">
        <h1>Projects</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
        </p>
      </div>

      <div className="projects-grid">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <div 
            key={index}
            className="project-square"
            style={{ backgroundImage: `url(/path/to/your/image${index + 1}.jpg)` }}
          >
            {/* Placeholder for clickable content */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
