const colorHexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const colorInput = document.querySelector(".color-input");
const createBtn = document.querySelector(".create-btn");
const body = document.querySelector("body");
const buttons = document.querySelector(".buttons");

createBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const colorHex = colorInput.value;
  const button = document.createElement("button");

  if (!colorHex || !colorHexPattern.test(colorHex)) {
    alert("Enter correct color hex value!");
    return;
  }

  button.classList.add("color-btn");
  button.style.backgroundColor = colorHex;
  button.innerText = colorHex;

  buttons.appendChild(button);

  colorInput.value = "";

  button.addEventListener("click", function () {
    body.style.backgroundColor = colorHex;
  });
});
