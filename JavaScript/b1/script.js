const squaresContainer = document.querySelector('#squares');
const numberOfSquares = 16;
var i = 0;
let square1, square2;
let clickCount = 0;
let colors = [
    "#232a51",
    "#232a51",
    "#4f5574",
    "#4f5574",
    "#7b7f97",
    "#7b7f97",
    "#a7aab9",
    "#a7aab9",
    "#d3d4dc",
    "#d3d4dc",
    "#4e4398",
    "#4e4398",
    "#7169ad",
    "#7169ad",
    "#958ec1",
    "#958ec1",
    "#b8b4d6",
    "#b8b4d6",
];
function selectColor() {
    const random = Math.floor(Math.random() * colors.length);
    const selected = colors[random];
    colors.splice(random, 1);
    return selected;
};

while (i < numberOfSquares) {
    const square = document.createElement('li')
    const color = selectColor();
    //square.style.background = color
    square.setAttribute("data-color", color)
    squaresContainer.appendChild(square)
    i++;
}

const squares = document.querySelectorAll('li')
for (const square of squares) {
    square.addEventListener('click', squareClicked)
}

function squareClicked() {
    clickCount++;
    clickCount === 1 ? (square1 = this) : (square2 = this)
    if(clickCount === 1) {
        square1.style.background = square1.getAttribute("data-color")
    } else {
        square2.style.background = square2.getAttribute("data-color")
    }
}

//selectColor();
//selectColor();
//console.log(selectColor());
