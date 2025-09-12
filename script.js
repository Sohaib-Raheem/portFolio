const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("show");
  overlay.classList.toggle("show");
  document.body.classList.toggle("menu-open"); // yahan body lock ho jayegi
});

overlay.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navLinks.classList.remove("show");
  overlay.classList.remove("show");
  document.body.classList.remove("menu-open"); // body unlock ho jayegi
});

// Footer ke liye dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// Form handling
function handleSubmit(e) {
  e.preventDefault();
  document.getElementById("form-msg").innerText = "Message sent successfully ✅";
  return false;
}
