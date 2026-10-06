// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// SCROLL REVEAL
const revealElements = document.querySelectorAll(
  ".section-label, .section h2, .info-card, .skill-group, .project-card, .journey-item, .contact-card"
);
revealElements.forEach((element) => {
  element.classList.add("reveal");
});
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  });
revealElements.forEach((element) => {
  observer.observe(element);
});

// Current year
document.getElementById("year").textContent = new Date().getFullYear();
