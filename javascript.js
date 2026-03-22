const gridContainer = document.querySelector(".container");

function gridCreate() {
    for (i = 0; i < 256; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridSquare.style.width = (100 / 16) + "%";
        gridContainer.appendChild(gridSquare);
    }
    
}
gridCreate();

const drawFunction = document.querySelectorAll(".grid-square");
for (let div of drawFunction) {
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = 'royalblue'
    })
}

const newGridButton = document.querySelector("#new-grid");
newGridButton.addEventListener("click", () => {
    let getNewGridValue = prompt("What would you like the size of your new grid to be?");
    let newGridValue = parseInt(getNewGridValue);

    if (newGridValue <= 100) {
    let newGridSize = newGridValue * newGridValue;

    gridContainer.replaceChildren();

    for (i = 0; i < newGridSize; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridSquare.style.width = (100 / newGridValue) + "%";
        gridContainer.appendChild(gridSquare);
    }
    } else {
        alert("Value selected too high!");
    }
    const drawFunction = document.querySelectorAll(".grid-square");
for (let div of drawFunction) {
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = 'royalblue'
    })
}
}
)