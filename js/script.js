// Select the theme toggle button
const themeToggleBtn = document.getElementById("theme-toggle");

// Toggle the 'dark' class on the body when clicked
themeToggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});