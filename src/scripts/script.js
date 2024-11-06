

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
