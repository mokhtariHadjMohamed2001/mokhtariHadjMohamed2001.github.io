const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// Toggle menu on mobile tap
hamburger.addEventListener("click", () => {
  menu.style.display = menu.style.display === "inline" ? "none" : "inline";
});
