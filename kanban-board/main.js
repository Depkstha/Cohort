// Draggable implementation
"use strict";

class Board {
  constructor(title, color) {
    this.title = title;
    this.color = color;
  }
}

class Task {
  constructor(
    boardId,
    title,
    description,
    dueDate,
    priority,
    tags,
    createdDate
  ) {
    this.boardId = boardId;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.tags = tags;
    this.createdDate = createdDate;
  }
}

const draggableTaskCards = document.querySelectorAll(".task-card");
const addBoardForm = document.getElementById("boardForm");
const boards = document.querySelectorAll(".board");

const boardArray = [];
const taskArray = [];
let dragged;

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
  const newBoard = new Board(formData.get("title"), formData.get("color"));

  boardArray.push(newBoard);
  
  console.log(boardArray);
});

function createBoard() {
  let html;
  html = `<div class="board">
          <div class="board-header">
            <div class="board-title">
              <span class="color-preview"></span>
              <h5 onclick="openModal('#addBoardModal')">To Do</h5>
              <span class="count-badge">3</span>
            </div>
            <button class="add-task-btn" onclick="openModal('#addTaskModal')">
              <i class="bi bi-plus-circle-dotted"></i> Add Task
            </button>
          </div>

          <div class="board-body">
            <article draggable="true" class="task-card">
              <div class="task-card-header">
                <div class="task-meta">
                  <span class="date">Oct 5, 2023</span>
                  <span class="priority">High</span>
                </div>
                <div class="dropdown">
                  <button><i class="bi bi-three-dots-vertical"></i></button>
                </div>
              </div>
              <h2 class="task-title">Getting Started with Web Development</h2>
              <div class="task-content">
                <p>Learn how to build your first website...</p>
              </div>
              <div class="task-tags">
                <span class="tag">webdev</span>
                <span class="tag">beginners</span>
              </div>
            </article>
          </div>
        </div>`;
}
