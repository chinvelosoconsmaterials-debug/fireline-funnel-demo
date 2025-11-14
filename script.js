document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const header = document.querySelector(".site-header");

  if (!toggle || !header) return;

  toggle.addEventListener("click", () => {
    header.classList.toggle("nav-open");
  });
});
