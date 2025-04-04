// Draggable implementation
"use strict";

class Board {
  constructor(title, color, tasks) {
    this.title = title;
    this.color = color;
    this.tasks = tasks;
  }
}

class Task {
  constructor(title, description, dueDate, priority, tags, createdDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.tags = tags;
    this.createdDate = createdDate;
  }
}

// localStorage.clear();

const draggableTaskCards = document.querySelectorAll(".task-card");
const addBoardForm = document.getElementById("boardForm");
const boardContainer = document.getElementById("board-container");
const boards = document.querySelectorAll(".board");

const todoBoard = new Board("To Do", "red", []);
const doingBoard = new Board("Doing", "yellow", []);
const doneBoard = new Board("Done", "green", []);

let dragged;
const boardArray = JSON.parse(localStorage.getItem("boardArray")) || [
  todoBoard,
  doingBoard,
  doneBoard,
];

document.addEventListener("DOMContentLoaded", () => {
  boardContainer.insertAdjacentHTML(
    "beforeend",
    boardArray.map((board) => createBoard(board)).join("")
  );
});

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
      event.target.querySelector(".board-body").appendChild(dragged);
    }
  });
});

addBoardForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);

  this.reset();
  closeModal("#addBoardModal");
  const newBoard = new Board(formData.get("title"), formData.get("color"), []);

  boardArray.push(newBoard);

  boardContainer.insertAdjacentHTML("beforeend", createBoard(newBoard));

  localStorage.setItem("boardArray", JSON.stringify(boardArray));
});

const createBoard = (board) => {
  return `<div class="board">
          <div class="board-header">
            <div class="board-title">
              <span class="color-preview" style="background: ${
                board.color
              }"></span>
              <h5 onclick="openModal('#addBoardModal')">${board.title}</h5>
              <span class="count-badge">${board.tasks.length || 0}</span>
            </div>
            <button class="add-task-btn" onclick="openModal('#addTaskModal')">
              <i class="bi bi-plus-circle-dotted"></i> Add Task
            </button>
          </div>

          <div class="board-body">
            ${
              board.tasks.length > 0
                ? board.tasks.map(createTaskCard).join("")
                : ""
            }
          </div>
        </div>`;
};

const createTaskCard = (task) => {
  return `
          <article draggable="true" class="task-card">
              <div class="task-card-header">
                <div class="task-meta">
                  <span class="date">${task.dueDate}</span>
                  <span class="priority">${task.priority}</span>
                </div>
                <div class="dropdown">
                  <button><i class="bi bi-three-dots-vertical"></i></button>
                </div>
              </div>
              <h2 class="task-title">${task.title}</h2>
              <div class="task-content">
                <p>${task.description}</p>
              </div>
              <div class="task-tags">
              ${task.tags.length > 0 ? task.tags.map(createTag).join("") : ""}
                <span class="tag">beginners</span>
              </div>
            </article>`;
};

const createTag = (tag) => `<span class="tag">${tag}</span>`;
