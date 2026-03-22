const gridContainer = document.querySelector(".container")

function gridCreate() {
    for (i = 0; i < 255; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.textContent = "Test";
        gridSquare.classList.add("grid-square");
        gridContainer.appendChild(gridSquare);
    }
    
}

gridCreate();