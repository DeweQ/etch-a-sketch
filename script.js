try {

const grid = document.querySelector("#container");
let flexSheet = document.querySelector("#flex-sheet");
let gridSize = 16;
for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell", "adjust-flex-basis");
    grid.appendChild(cell);
}

if (flexSheet)
   document.head.removeChild(flexSheet);

flexSheet = document.createElement("style");

flexSheet.id = "flex-sheet";
document.head.appendChild(flexSheet);
flexSheet.sheet.insertRule(`.adjust-flex-basis { flex: 0 0 calc(100% / ${gridSize});}`);
} catch(e) {alert(e); }



