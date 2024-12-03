import React from "react";
import '../styles/projects.css'; // Make sure to import your CSS file

const projects = [
  {
    text: "This website",
    link: "/posts/website",
    image: "/tabletMockup1.png",
  },
  {
    text: "Case Study: a coffee tracking app",
    link: "/posts/case-study",
    image: "/phoneMockupEspressoApp.png",
  },
];

const Projects = ({ id }) => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-heading">
        <h1>Projects</h1>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link} // Corrected to use the current project
            className="project-square"
            style={{ backgroundImage: `url(${project.image})` }} // Corrected to use the current project
          >
            <div className="project-text">
              <p>{project.text}</p> {/* Corrected to use the current project */}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
