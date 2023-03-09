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
let allPresetColors = document.querySelector(".preset-colors");
let presetColor = document.querySelectorAll(".preset");

// TOOLS AND PRESET COLORS-------------------------------

let chosenColor;

pencil.addEventListener("click", function() {
    pencil.style.border = "2px solid red";
    pencilRainbow.style.border = "";

    chosenColor = "#000000";
});

pencilRainbow.addEventListener("click", function() {
    pencilRainbow.style.border = "2px solid red";
    pencil.style.border = "";
    
    rainbowArray = ["#fb0304", "#fc8044", "#fefe04", "#02fd02", "#0201fa", "#ff01fd"];
    random = Math.floor(Math.random() * rainbowArray.length);

    chosenColor = `${rainbowArray[random]}`;
});





for(let color of presetColor) {
    color.addEventListener("click", function() {
        console.log(this.dataset.value);
    });
}


// INPUT CANVAS SIZE-------------------------------------
let chosenPixels;
let canvas;
function myCanvas(input) {
    if((input > 0) && (input <= 64)) {
        return canvas = input * input;
    } else {
        alert("Your number is not valid!");
    }
}

// CREATE CANVAS-----------------------------------------
function createCanvas() {
    if(chosenPixels <= 64) {
        for(i = 0; i < canvas; i++) {
            const gridBlock = document.createElement("div");
            gridContainer.appendChild(gridBlock).classList.add("grid-item");
            gridBlock.addEventListener("mousedown", function(e) {
                if(e.buttons !== 1) {
                    return;
                } else if(e.buttons == 1) {
                    gridBlock.style.backgroundColor = chosenColor;
                }
            });
            gridBlock.addEventListener("mousemove", function(e) {
                if(e.buttons !== 1) {
                    return;
                } else if(e.buttons == 1) {
                    gridBlock.style.backgroundColor = chosenColor;
                }
            });
        }
    } else {
        while(gridContainer.hasChildNodes()) {
            gridContainer.removeChild(gridContainer.lastChild);
        }

        const para = document.createElement("p");
        const text = document.createTextNode("Try again 1-64");
        para.appendChild(text);
        gridContainer.appendChild(para).classList.add("howto");
    }
}

// NEW CANVAS BUTTON-----------------------------------
buttonNew.addEventListener("click", function() {    

    while(gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.lastChild);
    }

    chosenPixels = inputBox.value;
    myCanvas(chosenPixels)

    gridContainer.style.gridTemplateColumns = `repeat(${chosenPixels}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${chosenPixels}, 1fr)`;

    createCanvas()
});

// CLEAR THE CANVAS BUTTON-----------------------------
buttonClear.addEventListener("click", function() {
    const gridBlocks = document.querySelectorAll(".grid-item");
    for(let block of gridBlocks) {
        block.style.backgroundColor = "#ffffff";
    }
});

// TOGGLE THE GRID-------------------------------------
buttonToggle.addEventListener("click", function() {
    gridContainer.classList.toggle("toggle-grid");
});
