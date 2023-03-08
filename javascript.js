const gridContainer = document.querySelector(".canvas");
const buttonNew = document.querySelector("#menu-new");
const inputBox = document.querySelector(".input-box");
const buttonClear = document.querySelector("#menu-clear");
const buttonToggle = document.querySelector("#menu-toggle");
const pencil = document.querySelector(".pencil");
const pencilRainbow = document.querySelector(".pencil-rainbow");
const fill = document.querySelector(".fill");
const droplet = document.querySelector(".droplet");
const eraser = document.querySelector(".eraser");
const colorPicker = document.querySelector(".color-picker");
let presetColor = document.querySelectorAll(".preset");

let chosenPixels;
let canvas;


function defaultGrid() {
    for(i = 0; i < 256; i++) {
        const gridElement = document.createElement("div");
        gridContainer.appendChild(gridElement).classList.add("grid-item");
    }
}
defaultGrid()


buttonNew.addEventListener("click", function() {

    while(gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.lastChild);
    }

    chosenPixels = inputBox.value;

    canvas = chosenPixels * chosenPixels;

    gridContainer.style.gridTemplateColumns = `repeat(${chosenPixels}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${chosenPixels}, 1fr)`;

    for(i = 0; i < canvas; i++) {
        const gridElement = document.createElement("div");
        gridContainer.appendChild(gridElement).classList.add("grid-item");
    }

});


let allBlocks = document.querySelectorAll(".grid-item");


buttonClear.addEventListener("click", function() {
    for(let block of allBlocks) {
        block.classList.remove("grid-item-colored");
        block.classList.add("grid-item");
    }
});



buttonToggle.addEventListener("click", function() {
    gridContainer.classList.toggle("toggle-grid");
});



for(let block of allBlocks) {
    block.addEventListener("mousedown", mouseDown);
    block.addEventListener("mousemove", mouseMove);

    function mouseDown(e) {
        if(e.buttons !== 1) {
            return;
        } else if(e.buttons == 1) {
        block.classList.remove("grid-item");
        block.classList.add("grid-item-colored");
        }
    }
    function mouseMove(e) {
        if(e.buttons !== 1) {
            return;
        } else if(e.buttons == 1) {
        block.classList.remove("grid-item");
        block.classList.add("grid-item-colored");
        }
    }
}







// !!!!! THIS IS WORKING WITH CLICK AND DRAG !!!!!

// for(let block of allBlocks) {
//     block.addEventListener("mousemove", draw);

//     function draw(e) {
//         if(e.buttons !== 1) {
//             return;
//         } else {
//             block.classList.remove("grid-item");
//             block.classList.add("grid-item-colored");
//         }
//     }
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



// !!!!! THIS IS WORKING WITH HOVER !!!!!

// for(let block of allBlocks) {

//     block.addEventListener("mouseover", function() { 
//         block.classList.remove("grid-item");
//         block.classList.add("grid-item-colored");
//     });
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
