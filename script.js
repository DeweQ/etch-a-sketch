try {

const grid = document.querySelector("#container");
grid.addEventListener("mouseover", e => {
  if (e.target.classList.contains("cell"))
    draw(e.target,"black");
});
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

function draw(target,color) {
  target.style.backgroundColor = color;
}
generateGrid(16);

} catch(e) {alert(e); }



