createGrid(16);
const button = document.getElementById("new-grid");

button.addEventListener("click", function() {
    const squaresPerSide = prompt("How many squares per side?", 16);

    if (squaresPerSide != null) {
        if (squaresPerSide < 1 || squaresPerSide > 100) {
            alert("Number out of range. Try again.");
        }
        else {
            createGrid(squaresPerSide);
        }
    }
});


function createGrid(squaresPerSide) {
    const container = document.getElementById("container");
    const squareSize = 800 / squaresPerSide;
    const numberOfSquares = squaresPerSide * squaresPerSide;

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i = 1; i <= numberOfSquares; i++) {
        const div = document.createElement("div");

        div.classList = "square";
        div.setAttribute("style",
            `
            border: none;
            margin: 0;
            padding: 0;
            height: ${squareSize}px;
            width: ${squareSize}px;
            background-color: black;
            opacity: .1;
            display: inline-block;
        `);
        div.addEventListener("mouseenter", colorIn);
        container.appendChild(div);
    }
}

function colorIn() {
    let currentOpacity = +this.style.opacity;
    if (currentOpacity < 1) currentOpacity += .10;
    this.style.opacity = currentOpacity;
}