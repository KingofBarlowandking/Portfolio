import React, { useEffect, useState } from 'react';

const Sidebar = ({ sections }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleMouseMove = (event) => {
      const windowWidth = window.innerWidth;
      const mouseX = event.clientX;
      setIsSidebarVisible(mouseX > (windowWidth * 8) / 10); // Show sidebar when mouse is on the right 1/3 of the screen
    };

    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId); // Set the active section when clicked
    }
  };

  return (
    <nav
      id="sidebar"
      className={isSidebarVisible ? 'visible' : ''}
      style={{
        right: isSidebarVisible ? '0' : '-10%',
        transition: 'right 0.3s ease',
      }}
    >
      <div className={`sidebar-hint ${isSidebarVisible ? 'expanded' : ''}`}>
        <span>&larr;</span>
      </div>
      <ul>
      {sections.map((section) => (
          <li
            key={section}
            className={activeSection === section ? 'active' : ''}
            onClick={() => scrollToSection(section)}
          >
            <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
