const gridContainer = document.querySelector(".canvas");
const createButton = document.querySelector("#menu-new");

let chosenPixels;
let canvas;

function defaultGrid() {
    for(i = 0; i < 256; i++) {
        const gridElement = document.createElement("div");
        gridContainer.appendChild(gridElement).classList.add("grid-item");
    }
}
defaultGrid()

createButton.addEventListener("click", function() {
    chosenPixels = prompt("Give me a number, I give you a canvas.")

    canvas = chosenPixels * chosenPixels;

    while(gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    createGrid()
    
    gridContainer.style.gridTemplateColumns = `repeat(${chosenPixels}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${chosenPixels}, 1fr)`;
 
});

function createGrid() {
    for(i = 0; i < canvas; i++) {
        const gridElement = document.createElement("div");
        gridContainer.appendChild(gridElement).classList.add("grid-item");
    }
}

let allBlocks = document.querySelectorAll(".grid-item");
for(let block of allBlocks) {
    block.addEventListener("mouseover", function() {
        block.classList.remove("grid-item");
        block.classList.add("grid-item-colored");
    });
}