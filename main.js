
// sorry for unlcean code i did what i could to keep it a little clean and concise.

// the odin project(TOP), ETCH-A-SKETCH PROJECT

const gridContainer = document.querySelector(".grid-container");
const pixels = 90;

// grid
function generateGrid(gridSize) {
  gridContainer.innerHTML = "";

  for(let index = 0; index < gridSize * gridSize; index++) {
    const cellItem = document.createElement("div");
    cellItem.classList.add("cell-item");
    cellItem.style.height = `${ 600/gridSize }px`;
    cellItem.style.width = `${ 800/gridSize }px`;
    gridContainer.appendChild(cellItem);
  }
};
generateGrid(pixels);

// reset button
const resetBtn = document.querySelector(".resetbtn");
resetBtn.addEventListener("click",function() {
  gridContainer.innerHTML = "";
  generateGrid(pixels);
});

// eraser button
const eraserBtn = document.querySelector(".eraserbtn");
let isErasing = false;
eraserBtn.addEventListener("click",function() {
  isErasing = !isErasing;
  if(!isErasing) {
    eraserBtn.textContent = "ERASER";
  }else{
    eraserBtn.textContent = "PEN"
  }
});

// pixels button and modal display
const pixelBtn = document.querySelector(".pixelbtn");
const pixelModal = document.getElementById("pixel-modal");
const closeModal = document.querySelector(".modal-button:last-child");

function hidePixelModal() {
  pixelModal.classList.add("hidden");
};
function showPixelModal() {
  pixelModal.classList.remove("hidden");
};
pixelBtn.addEventListener("click",showPixelModal);
closeModal.addEventListener("click",hidePixelModal);



// drawing
let isSketching = true;
gridContainer.addEventListener("mouseover", (e) => {
  if (isSketching && e.target.classList.contains("cell-item")) {
    e.target.style.backgroundColor = isErasing ? "white" : "black";
  }
});
