const gridContainer = document.querySelector(".canvas");
const gridBlocks = document.querySelectorAll(".grid-item");
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
function myCanvas(input) {
    if((input > 0) && (input <= 64)) {
        return canvas = input * input;
    } else {
        alert("Your number is not valid!");
    }
}

buttonNew.addEventListener("click", function() {    

    while(gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.lastChild);
    }

    chosenPixels = inputBox.value;
    myCanvas(chosenPixels)

    gridContainer.style.gridTemplateColumns = `repeat(${chosenPixels}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${chosenPixels}, 1fr)`;

    if(chosenPixels <= 64) {
        for(i = 0; i < canvas; i++) {
            const gridBlock = document.createElement("div");

            gridContainer.appendChild(gridBlock).classList.add("grid-item");
        }
    } else {
        while(gridContainer.hasChildNodes()) {
            gridContainer.removeChild(gridContainer.lastChild);
        }
    }

});

buttonClear.addEventListener("click", function() {
    for(let block of gridBlocks) {
        block.classList.remove("grid-item-colored");
        block.classList.add("grid-item");
    }
});



buttonToggle.addEventListener("click", function() {
    gridContainer.classList.toggle("toggle-grid");
});








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
