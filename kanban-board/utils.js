// Dark mode implementation

const toggleButton = document.querySelector(".toggle-button");
const toggleIcon = document.getElementById("toggle-icon");
const body = document.body;

const currentTheme = localStorage.getItem("theme") || "light";

const currentToggleIconClass =
  currentTheme == "dark-mode" ? "bi-brightness-high" : "bi-moon-stars";
toggleIcon.classList.add(currentToggleIconClass);

body.classList.add(currentTheme);

toggleButton.addEventListener("click", () => {
  const isDarkMode = body.classList.contains("dark-mode");
  const newTheme = isDarkMode ? "light" : "dark-mode";
  const newIconClass = newTheme == "dark-mode" ? "bi-brightness-high" : "bi-moon-stars";

  body.classList.remove("dark-mode", "light");
  body.classList.add(newTheme);

  toggleIcon.classList.remove("bi-brightness-high", "bi-moon-stars");
  toggleIcon.classList.add(newIconClass);

  localStorage.setItem("theme", newTheme);
});

//Toggle modal implementation
const openModal = (modalId) => {
  const modal = document.querySelector(modalId);
  modal.classList.add("show");
  body.classList.add("modal-open");
};

const closeModal = (modalId) => {
  const modal = document.querySelector(modalId);
  console.log(modal);
  modal.classList.remove("show");
  body.classList.remove("modal-open");
};
