const gridContainer = document.querySelector(".container");
const resizeButton = document.querySelector(".squares-btn");

function createGrid(size) {
  gridContainer.innerHTML = "";

  const squareSize = 256 / size;
  const totalSquares = size * size;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");

    square.classList.add("square");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseenter", () => {
      square.classList.add("painted");
    });

    gridContainer.appendChild(square);
  }
}

resizeButton.addEventListener("click", () => {
  const userInput = prompt("How many squares per side? (1-100)");

  if (userInput === null) return;
  if (userInput.trim() === "") return;

  const size = Number(userInput);

  if (isNaN(size)) return;
  if (size < 1 || size > 100) return;

  createGrid(size);
});

createGrid(16);