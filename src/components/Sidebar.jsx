import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Show sidebar when mouse is in the right third of the screen
  useEffect(() => {
    const handleMouseMove = (event) => {
      const windowWidth = window.innerWidth;
      const mouseX = event.clientX;

      console.log("Mouse X:", mouseX);  // Debugging log to check mouse position

      if (mouseX > (windowWidth * 2) / 3) {
        setIsSidebarVisible(true);
      } else {
        setIsSidebarVisible(false);
      }
    };

    document.body.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Intersection Observer to highlight the active section
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionName = entry.target.id;
          if (entry.isIntersecting) {
            setActiveSection(sectionName);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      id="sidebar"
      style={{
        right: isSidebarVisible ? "0" : "-12.5%", // Sidebar position
        transition: "right 0.3s ease",
      }}
    >
      <ul>
        <li
          data-section="hero"
          className={activeSection === "hero" ? "active" : ""}
        >
          <span>Home</span>
        </li>
        <li
          data-section="about"
          className={activeSection === "about" ? "active" : ""}
        >
          <span>About</span>
        </li>
        <li
          data-section="projects"
          className={activeSection === "projects" ? "active" : ""}
        >
          <span>Projects</span>
        </li>
        <li
          data-section="skills"
          className={activeSection === "skills" ? "active" : ""}
        >
          <span>Skills</span>
        </li>
        <li
          data-section="contact"
          className={activeSection === "contact" ? "active" : ""}
        >
          <span>Contact</span>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
