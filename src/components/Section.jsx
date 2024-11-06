import React, { useEffect, useRef } from 'react';

// Helper function for easing effect
const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

const Section = ({ name, index }) => {
  const sectionRef = useRef(null);

  const smoothScrollTo = (target) => {
    const start = window.scrollY;
    const end = target.offsetTop;
    const distance = end - start;
    const duration = 800;
    let startTime = null;

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easing = easeInOutQuad(progress);
      window.scrollTo(0, start + distance * easing);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    if (sectionRef.current) {
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        smoothScrollTo(sectionRef.current);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
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
