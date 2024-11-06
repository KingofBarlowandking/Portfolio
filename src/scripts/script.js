

  // Sidebar hover effect to show the sidebar
document.body.addEventListener("mousemove", function (event) {
  const sidebar = document.getElementById("sidebar");
  const windowWidth = window.innerWidth;
  const mouseX = event.clientX;

  // Show sidebar if the mouse is in the right third of the page
  if (mouseX > (windowWidth * 2) / 3) {
    sidebar.style.right = "0";
  } else {
    sidebar.style.right = "-12.5%";
  }
});

// Intersection Observer to highlight active section in the sidebar
const sections = document.querySelectorAll(".section");
const navItems = document.querySelectorAll("#sidebar ul li");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const sectionName = entry.target.id;

      // Find the corresponding navigation item
      navItems.forEach((item) => {
        if (item.getAttribute("data-section") === sectionName) {
          if (entry.isIntersecting) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        }
      });
    });
  },
  { threshold: 0.6 }
);

sections.forEach((section) => observer.observe(section));


// Helper function for easing effect
function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

// Smooth scroll to a target element with easing effect
function smoothScrollTo(target) {
  const start = window.scrollY;
  const end = target.offsetTop;
  const distance = end - start;
  const duration = 2000; // Duration in milliseconds
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easing = easeInOutQuad(progress);
    window.scrollTo(0, start + distance * easing);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

// Scroll event listener to snap to sections
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Check if we're within the section range
    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      smoothScrollTo(section);
    }
  });
});