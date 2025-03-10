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
  const newIconClass =
    newTheme == "dark-mode" ? "bi-brightness-high" : "bi-moon-stars";

  body.classList.remove("dark-mode", "light");
  body.classList.add(newTheme);

  toggleIcon.classList.remove("bi-brightness-high", "bi-moon-stars");
  toggleIcon.classList.add(newIconClass);

  localStorage.setItem("theme", newTheme);
});

//Toggle modal implementation
const modalPopupButtons = document.querySelectorAll(".open");
const modalController = document.getElementById("modal-container");
const modalCloseButtons = document.querySelectorAll(".close");
modalPopupButtons.forEach((openButton) => {
  openButton.addEventListener("click", () => {
    modalController.classList.add("show");
  });
});

modalCloseButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    modalController.classList.remove("show");
    body.style.removeProperty("background-color");
  })
})

// Draggable implementation
let dragged;

const draggableTaskCards = document.querySelectorAll(".task-card");

draggableTaskCards.forEach((draggable) => {
  draggable.addEventListener("drag", (event) => {
    console.log("Dragging");
  });

  draggable.addEventListener("dragstart", (event) => {
    dragged = event.target;
    event.target.classList.add("dragging");
  });

  draggable.addEventListener("dragend", (event) => {
    event.target.classList.remove("dragging");
  });
});

const boards = document.querySelectorAll(".board");

boards.forEach((board) => {
  board.addEventListener(
    "dragover",
    (event) => {
      event.preventDefault();
    },
    false
  );

  board.addEventListener("dragenter", (event) => {
    if (event.target.classList.contains("board")) {
      console.log("Entering board");
      event.target.classList.add("dragover");
    }
  });

  board.addEventListener("dragleave", (event) => {
    if (event.target.classList.contains("board")) {
      console.log("Leaving board");
      event.target.classList.remove("dragover");
    }
  });

  board.addEventListener("drop", (event) => {
    event.preventDefault();
    if (event.target.classList.contains("board")) {
      event.target.classList.remove("dragover");
      event.target.appendChild(dragged);
    }
  });
});
