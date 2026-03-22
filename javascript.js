const gridContainer = document.querySelector(".container")

function gridCreate() {
    for (i = 0; i < 256; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridContainer.appendChild(gridSquare);
    }
    
}
gridCreate();

const drawFunction = document.querySelectorAll(".grid-square")
for (let div of drawFunction) {
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = 'royalblue'
    })
}