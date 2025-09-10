const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    hamburger.classList.toggle("active");
  });
}


document.getElementById("year").textContent = new Date().getFullYear();


function handleSubmit(e) {
  e.preventDefault();
  document.getElementById("form-msg").textContent =
    "Thanks for your message! ";
  return false;
}
