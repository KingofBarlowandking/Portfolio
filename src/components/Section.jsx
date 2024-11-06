import React, { useEffect, useRef } from 'react';

const Section = ({ name, index, id }) => {
  const sectionRef = useRef(null);

  // Update the active section based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add active class to the sidebar navigation
            document
              .querySelector(`[data-section="${id}"]`)
              .classList.add('active');
          } else {
            document
              .querySelector(`[data-section="${id}"]`)
              .classList.remove('active');
          }
        });
      },
      { threshold: 0.6 } // Trigger when 60% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [id]);

  return (
    <section
      ref={sectionRef}
      id={id}
      style={{
        height: '150vh',
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
