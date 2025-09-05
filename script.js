// Mobile menu toggle (optional future feature)
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form submit
function handleSubmit(e) {
  e.preventDefault();
  document.getElementById("form-msg").textContent = "Thanks for your message! ";
  return false;
}
