import React, { useEffect, useState } from "react";
import Section from './Section';

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleMouseMove = (event) => {
      const windowWidth = window.innerWidth;
      const mouseX = event.clientX;
      setIsSidebarVisible(mouseX > (windowWidth * 2) / 3); // Show sidebar if mouse is in the right 1/3 of the screen
    };

    document.body.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Function to handle sidebar item click and scroll to the section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <nav
        id="sidebar"
        className={isSidebarVisible ? "visible" : ""}
        style={{
          right: isSidebarVisible ? "0" : "-10%", // Sidebar is off-screen when hidden
          transition: "right 0.3s ease",
        }}
      >
        <div className={`sidebar-hint ${isSidebarVisible ? "expanded" : ""}`}>
          <span>&larr;</span>
        </div>
        <ul>
          {["hero", "about", "projects", "skills", "contact"].map((section) => (
            <li
              key={section}
              className={activeSection === section ? "active" : ""}
              onClick={() => scrollToSection(section)}  // Add click handler
            >
              <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
            </li>
          ))}
        </ul>
      </nav>
      {["hero", "about", "projects", "skills", "contact"].map((section, index) => (
        <Section
          key={section}
          id={section}
          name={section.charAt(0).toUpperCase() + section.slice(1)}
          index={index}
          setActiveSection={setActiveSection}  // Pass the function to update active section
        />
      ))}
    </div>
  );
};

export default Sidebar;
