const colorHexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const whiteColorHexPattern = /^#([fF]{3}|[fF]{6})$/;

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colorInput = document.querySelector(".color-input");
const createBtn = document.querySelector(".create-btn");
const generateColorBtn = document.querySelector(".generate-color-btn");
const body = document.querySelector("body");
const buttons = document.querySelector(".buttons");

createBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const colorHex = colorInput.value;
  const button = document.createElement("button");

  if (!colorHex || !colorHexPattern.test(colorHex)) {
    alert("Enter correct color hex value 6 or 3!");
    return;
  }

  if (whiteColorHexPattern.test(colorHex)) button.style.color = "#000000";

  button.classList.add("color-btn");
  button.style.backgroundColor = colorHex;
  button.innerText = colorHex;

  buttons.appendChild(button);

  colorInput.value = "";

  button.addEventListener("click", function () {
    body.style.backgroundColor = colorHex;
  });
});

generateColorBtn.addEventListener("click", function () {
  const hexCode = "#" + Array.from({ length: 6 }, () => hex[generateRandomNumber()]).join("");
  colorInput.value = hexCode;
});

const generateRandomNumber = () => Math.floor(Math.random() * hex.length);
