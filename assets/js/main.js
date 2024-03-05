function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const burger = document.querySelector(".burger");
  const dropdown = document.querySelector(".dropdown-content");

  navLinks.classList.toggle("active");
  burger.classList.toggle("active");
  dropdown.classList.toggle("active");

  // Close dropdown if screen is larger than 768px and burger is clicked
  if (window.innerWidth > 768 && !burger.classList.contains("active")) {
    dropdown.classList.remove("active");
    burger.classList.remove("active");
  }
}

window.onresize = function () {
  const screenWidth = window.innerWidth;
  const burger = document.querySelector(".burger");
  const dropdown = document.querySelector(".dropdown-content");

  // Close dropdown and reset burger state if screen is larger than 768px
  if (screenWidth > 768) {
    dropdown.classList.remove("active");
    burger.classList.remove("active");
  }
};

// Get current year and update the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;
