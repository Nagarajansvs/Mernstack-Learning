// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close menu when clicking on a link
const navLinkElements = document.querySelectorAll(".nav-links a");

navLinkElements.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    mobileMenuBtn.classList.remove("active");
    navLinks.classList.remove("active");

    navLinkElements.forEach((navLink) => navLink.classList.remove("active"));
    link.classList.add("active");
  });
});

// Smooth scroll for navigation links
// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    mobileMenuBtn.classList.remove("active");
    navLinks.classList.remove("active");
  }
});

// Add sticky header background on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 1500);
});

// Fighter card flip on click or Enter/Space key
document.querySelectorAll(".fighter-card").forEach((card) => {
  card.setAttribute("tabindex", "0");
  card.addEventListener("click", (e) => {
    card.classList.toggle("flipped");
  });
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      card.classList.toggle("flipped");
    }
  });
});

// Initialize AOS animations
if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 900,
    easing: "ease-out-cubic",
    once: true,
    mirror: false,
  });
}
