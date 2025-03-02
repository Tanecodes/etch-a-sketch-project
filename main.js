
// sorry for unlcean code i did what i could to keep it a little clean and concise.

// the odin project(TOP), ETCH-A-SKETCH PROJECT

const gridContainer = document.querySelector(".grid-container");
let pixels = 100;
let isSketching = true;
let isErasing = false;

// grid
function generateGrid(gridSize) {
  gridContainer.innerHTML = "";

  for(let index = 0; index < gridSize * gridSize; index++) {
    const cellItem = document.createElement("div");
    cellItem.classList.add("cell-item");
    cellItem.style.height = `${ 600/gridSize }px`;
    cellItem.style.width = `${ 1200/gridSize }px`;
    gridContainer.appendChild(cellItem);
  }
};
generateGrid(pixels);

// clear button
const clearBtn = document.querySelector(".clearbtn");
clearBtn.addEventListener("click",function() {
  gridContainer.innerHTML = "";
  generateGrid(pixels);
});

// eraser button
const eraserBtn = document.querySelector(".eraserbtn");
eraserBtn.addEventListener("click",function() {
    isErasing = !isErasing;
    eraserBtn.textContent = "PEN";
    eraserBtn.textContent = isErasing ? "PEN":"ERASER";
});

// pixels button and modal display
const pixelBtn = document.querySelector(".pixelbtn");
const pixelModal = document.getElementById("pixel-modal");
const closeBtn = document.querySelector(".modal-button:last-child");

function hidePixelModal() {
  pixelModal.classList.add("hidden");
  isSketching = true;
};
function showPixelModal() {
  pixelModal.classList.toggle("hidden");
  isSketching = false;
};
pixelBtn.addEventListener("click",showPixelModal);
closeBtn.addEventListener("click",hidePixelModal);

// change the pixels in the modal
const userInput = document.querySelector(".change-pixel-input");
const applyBtn = document.querySelector(".modal-button:first-child");
function applyPixelChange() {
  if(userInput.value >= 50 && userInput.value <= 100) {
    pixels = parseInt(userInput.value);
    gridContainer.innerHTML = "";
    generateGrid(pixels);
    pixelModal.classList.add("hidden");
  }else{
    alert("numbers need to be between 50 and 100 😊");
  }
  userInput.value = "";
  isSketching = true;
};
applyBtn.addEventListener("click",applyPixelChange);

// drawing 
gridContainer.addEventListener("mouseover", (e) => {
  if (isSketching && e.target.classList.contains("cell-item")) {
    e.target.style.backgroundColor = isErasing ? "white" : "grey";
  }
});
