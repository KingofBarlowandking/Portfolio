import React, { useState } from 'react';

const MobileSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsSidebarOpen(false);
    }
  };

  return (
    <div>
      <button
        className="hamburger-menu"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>
      <nav className={`mobile-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul>
          {['hero', 'about', 'projects', 'skills', 'contact'].map((section) => (
            <li key={section} onClick={() => scrollToSection(section)}>
              <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileSidebar;
