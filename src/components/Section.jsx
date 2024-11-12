import React, { useEffect, useRef } from 'react';

const Section = ({ id, name, index, setActiveSection }) => {
  const sectionRef = useRef(null);

  // Observer to update the active section based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(id); // Trigger the active section update
          }
        });
      },
      { threshold: 0.5 }
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
        backgroundColor: ['#f0f8ff', '#e6e6fa', '#fafad2', '#ffe4e1', '#e0ffff'][index],
        scrollSnapAlign: 'start',
      }}
    >
      {name || id.charAt(0).toUpperCase() + id.slice(1)}
    </section>
  );
};

export default Section;
