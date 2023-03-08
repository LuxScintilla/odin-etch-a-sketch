const gridContainer = document.querySelector(".canvas");
const buttonNew = document.querySelector("#menu-new");
const slider = document.querySelector(".slider");
let sliderOutput = document.querySelector(".slider-output");
const buttonClear = document.querySelector("#menu-clear");
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

slider.oninput = function () {
    sliderOutput.textContent = this.value;
}

let allBlocks = document.querySelectorAll(".grid-item");
for(let block of allBlocks) {

 
    block.addEventListener("mousemove", draw);

    function draw(e) {
        if(e.buttons !== 1) {
            return;
        } else {
            block.classList.remove("grid-item");
            block.classList.add("grid-item-colored");
        }

    }


}




// !!!!! THIS IS WORKING WITH HOVER !!!!!


// let allBlocks = document.querySelectorAll(".grid-item");
// for(let block of allBlocks) {

//     block.addEventListener("mouseover", function() { 
//         block.classList.remove("grid-item");
//         block.classList.add("grid-item-colored");
//     });
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!






// buttonNew.addEventListener("click", function() {
//     chosenPixels = prompt("Give me a number, I give you a canvas.")

//     canvas = chosenPixels * chosenPixels;

//     while(gridContainer.hasChildNodes()) {
//         gridContainer.removeChild(gridContainer.lastChild);
//     }
//     createGrid()
    
//     gridContainer.style.gridTemplateColumns = `repeat(${chosenPixels}, 1fr)`;
//     gridContainer.style.gridTemplateRows = `repeat(${chosenPixels}, 1fr)`;
 
// });

// function createGrid() {
//     for(i = 0; i < canvas; i++) {
//         const gridElement = document.createElement("div");
//         gridContainer.appendChild(gridElement).classList.add("grid-item");
//     }
// }

// let allBlocks = document.querySelectorAll(".grid-item");
// for(let block of allBlocks) {
//     block.addEventListener("mouseover", function() {
//         block.classList.remove("grid-item");
//         block.classList.add("grid-item-colored");
//     });
// }