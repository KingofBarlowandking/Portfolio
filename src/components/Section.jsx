import React, { useEffect, useRef } from 'react';

const Section = ({ name, index, id, setActiveSection }) => {
  const sectionRef = useRef(null);

  // Update the active section based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update active section state in Sidebar
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 60% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [id, setActiveSection]);

  return (
    <section
      ref={sectionRef}
      id={id}
      style={{
        height: '110vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
        backgroundColor: [
          '#f0f8ff',
          '#e6e6fa',
          '#fafad2',
          '#ffe4e1',
          '#e0ffff',
        ][index],
        scrollSnapAlign: 'start',
      }}
    >
      {name}
    </section>
  );
};

export default Section;
