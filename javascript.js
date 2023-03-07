const gridContainer = document.querySelector(".grid-container");
const pixels = document.querySelector(".pixels");
const pixelValue = document.querySelector(".pixel-value");
const createButton = document.querySelector(".create");
let blocks = document.querySelectorAll(".grid-item");
let canvas = pixels.value * pixels.value;

pixelValue.textContent = pixels.value;
pixels.oninput = function() {
    pixelValue.textContent = this.value;
}

createButton.addEventListener("click", function() {
    while(gridContainer.lastElementChild) {
        gridContainer.removeChild(gridContainer.lastElementChild);
    }
    createGrid()
    
    gridContainer.style.gridTemplateColumns = `repeat(${pixels.value}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${pixels.value}, 1fr)`;
 
});

function createGrid() {
    for(i = 0; i < canvas; i++) {
        const gridElement = document.createElement("div");
        gridContainer.appendChild(gridElement).classList.add("grid-item");
    }
}


for(let block of blocks) {
    block.addEventListener("mouseover", function() {
        block.classList.remove("grid-item");
        block.classList.add("grid-item-colored");
    });
}




