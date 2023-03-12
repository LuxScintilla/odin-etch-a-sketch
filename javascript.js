const gridContainer = document.querySelector(".canvas");
const buttonNew = document.querySelector("#menu-new");
const inputBox = document.querySelector(".input-box");
const buttonClear = document.querySelector("#menu-clear");
const buttonToggle = document.querySelector("#menu-toggle");
const currentColor = document.querySelector(".current-color");
const pencil = document.querySelector(".pencil");
const pencilRainbow = document.querySelector(".pencil-rainbow");
const fill = document.querySelector(".fill");
const droplet = document.querySelector(".droplet");
const eraser = document.querySelector(".eraser");
const colorPicker = document.querySelector(".color-picker");
let allPresetColors = document.querySelector(".preset-colors");
let presetColor = document.querySelectorAll(".preset");

// CREATE CANVAS-----------------------------------------
function createCanvas() {
    if(chosenPixels <= 64) {
        for(i = 0; i < canvas; i++) {
            const gridBlock = document.createElement("div");
            gridContainer.appendChild(gridBlock).setAttribute("class", "grid-item");
            // gridBlock.addEventListener("mousedown", defaultDraw);
            // gridBlock.addEventListener("mousemove", draw);
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

// DRAW FUNCTIONALITY----------------------------------

function draw(e) {

    if(e.buttons !== 1) {
        return;
    } else if(e.buttons == 1) {
        e.target.style.backgroundColor = chosenColor;
    }
}

function erase(e) {

    if(e.buttons !== 1) {
        return;
    } else if(e.buttons == 1) {
        e.target.style.backgroundColor = "#ffffff";
    }
}

// TOOLS AND PRESET COLORS------------------------------

let chosenColor = "#000000";
let rgbColor;

function defaultDraw(e) {
    e.preventDefault(e);
    draw(e);
}

function defaultErase(e) {
    e.preventDefault(e);
    erase(e);
}

function randomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    rgbColor = "rgb("+x+","+y+","+z+")";
    chosenColor = rgbColor;
}

function rainbow(e) {
    randomColor(e);
    draw(e);
}

function fillFunction() {
    const gridBlocks = document.querySelectorAll(".grid-item");
    for(let gridBlock of gridBlocks) {
        gridBlock.style.backgroundColor = chosenColor;
    }
}

function dropletFunction(e) {
    chosenColor = e.target.style.backgroundColor;
}

//PENCIL-----
pencil.addEventListener("click", function() {
    pencil.style.border = "2px solid red";
    pencilRainbow.style.border = "";
    fill.style.border = "";
    droplet.style.border = "";
    eraser.style.border = "";

    const gridBlocks = document.querySelectorAll(".grid-item");
    for(let gridBlock of gridBlocks) {
        gridBlock.removeEventListener("mousedown", dropletFunction);
        gridBlock.removeEventListener("mouseenter", rainbow);
        gridBlock.removeEventListener("mouseup", fillFunction);
        gridBlock.removeEventListener("mousedown", defaultErase);
        gridBlock.removeEventListener("mousemove", erase);
        gridBlock.addEventListener("mousedown", defaultDraw);
        gridBlock.addEventListener("mousemove", draw);
    }
});

//RAINBOW PENCIL-----
pencilRainbow.addEventListener("click", function() {
    pencilRainbow.style.border = "2px solid red";
    pencil.style.border = "";
    fill.style.border = "";
    droplet.style.border = "";
    eraser.style.border = "";

    const gridBlocks = document.querySelectorAll(".grid-item");
    for(let gridBlock of gridBlocks) {
        gridBlock.removeEventListener("mousedown", dropletFunction);
        gridBlock.removeEventListener("mouseup", fillFunction);
        gridBlock.removeEventListener("mousedown", defaultErase);
        gridBlock.removeEventListener("mousemove", erase);
        gridBlock.addEventListener("mouseenter", rainbow);
        gridBlock.addEventListener("mousemove", draw);
    }
});

//FILL-----
fill.addEventListener("click",function () {
    fill.style.border = "2px solid red";
    pencilRainbow.style.border = "";
    pencil.style.border = "";
    droplet.style.border = "";
    eraser.style.border = "";

    const gridBlocks = document.querySelectorAll(".grid-item");
    for(let gridBlock of gridBlocks) {
        gridBlock.removeEventListener("mousedown", dropletFunction);
        gridBlock.removeEventListener("mouseenter", rainbow);
        gridBlock.removeEventListener("mousemove", draw);
        gridBlock.removeEventListener("mousedown", defaultErase);
        gridBlock.removeEventListener("mousemove", erase);
        gridBlock.addEventListener("mouseup", fillFunction);
    }
});

//DROPLET-----
droplet.addEventListener("click", function() {
    droplet.style.border = "2px solid red";
    fill.style.border = "";
    pencilRainbow.style.border = "";
    pencil.style.border = "";
    eraser.style.border = "";

    const gridBlocks = document.querySelectorAll(".grid-item");
    for(let gridBlock of gridBlocks) {
        gridBlock.removeEventListener("mouseenter", rainbow);
        gridBlock.removeEventListener("mousedown", defaultDraw);
        gridBlock.removeEventListener("mousemove", draw);
        gridBlock.removeEventListener("mousedown", defaultErase);
        gridBlock.removeEventListener("mousemove", erase);
        gridBlock.removeEventListener("mouseup", fillFunction);
        gridBlock.addEventListener("mousedown", dropletFunction);
    }

});

//ERASER-----
eraser.addEventListener("click", function() {
    eraser.style.border = "2px solid red";
    droplet.style.border = "";
    fill.style.border = "";
    pencilRainbow.style.border = "";
    pencil.style.border = "";

    chosenColor = "#ffffff";

    const gridBlocks = document.querySelectorAll(".grid-item");
    for(let gridBlock of gridBlocks) {
        gridBlock.removeEventListener("mousedown", dropletFunction);
        gridBlock.removeEventListener("mouseenter", rainbow);
        gridBlock.removeEventListener("mouseup", fillFunction);
        gridBlock.addEventListener("mousedown", defaultErase);
        gridBlock.addEventListener("mousemove", erase);
    }

});

//PRESET COLOR CHOICES-------------------------------
for(let color of presetColor) {
    color.addEventListener("click", function() {
        chosenColor = this.dataset.value;
    });
}

colorPicker.addEventListener("change", function() {
    chosenColor = this.value;
});



