try {

const grid = document.querySelector("#container");
let flexSheet = document.querySelector("#flex-sheet");

function generateGrid(size) {
  grid.innerHtml = "";
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell", "adjust-flex-basis");
    grid.appendChild(cell);
  }
  updateFlexSheet(size);
}
function updateFlexSheet(size) {
  if (flexSheet)
    document.head.removeChild(flexSheet);
    flexSheet = document.createElement("style");
    flexSheet.id = "flex-sheet";
    document.head.appendChild(flexSheet);
    flexSheet.sheet.insertRule(`.adjust-flex-basis { flex: 0 0 calc(100% / ${size});}`);
}
generateGrid(8);
} catch(e) {alert(e); }



