const grid = document.querySelector("#grid");
let gridSize = 16;
for (let i = 0; i < gridSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
} 