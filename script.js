const grid = document.querySelector("#container");
grid.addEventListener("mouseover", e => {
  if (e.target.classList.contains("cell"))
    draw(e.target,getRandomColor());
});
let gridSize = 16;
let flexSheet = document.querySelector("#flex-sheet");
const changeGridSizeButton = document.querySelector("#change-size");
changeGridSizeButton.addEventListener("click", changeGridSize);
const clearButton = document.querySelector("#clear-grid");
clearButton.addEventListener("click", ()=> generateGrid(gridSize));
function changeGridSize() {
  let result = prompt("Enter desired size: ");
  let size = parseInt(result);
  if (isNaN(size)) {
    alert(`"${result}" is not a number.`);
    return;
  }
  if (2 > size || size > 100) {
    alert("Out of range. Please enter a number between 2 and 100");
    return;
  }
  generateGrid(size);
}
function generateGrid(size) {
  grid.innerHTML = "";
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell", "adjust-flex-basis");
    grid.appendChild(cell);
  }
  updateFlexSheet(size);
  gridSize = size;
}
function updateFlexSheet(size) {
  if (flexSheet)
    document.head.removeChild(flexSheet);
    flexSheet = document.createElement("style");
    flexSheet.id = "flex-sheet";
    document.head.appendChild(flexSheet);
    flexSheet.sheet.insertRule(`.adjust-flex-basis { flex: 0 0 calc(100% / ${size});}`);
}

function draw(target,color) {
  target.style.backgroundColor = color;
}

function getRandomColor() {
  return "#"+parseInt(Math.random()*16581475).toString(16).padStart(6,"0");
}
generateGrid(gridSize);