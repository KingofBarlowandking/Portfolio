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
          <p>Empathy - Strong intuition for a customers pain points and ways to improve on a design or product built through years of customer service.</p>
          <p>Leadership and communication - Proven natural leadership and communication skills from past roles and other experiences.</p>
          <p>Problem solving and creativity - Strong aptitude for developing ‘left field’ solutions and using quick decision making when required</p>
        </div>
        <div className="skills-text-box">
          <h2>Technical</h2>
          <p> Figma - Basic Figma skillset with experience designing wireframes and mockups for web and mobile. </p>
          <p>Web development - Experience with html, css, React and Astro to build static websites and deploy them with Netlify.</p>
          <p>Adobe - Use of Illustrator for basic vector graphics and custom typography, Indesign for presentations and Photoshop for limited photo editing work. </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;