const container = document.querySelector(".container");
let rainbowMode = false;
let gridSize = 16;

//check if LMB is held down
let mouseDown = false;
document.body.addEventListener("mousedown", (e) => {
  if (e.button === 0) {
    e.preventDefault();
    mouseDown = true;
  }
});

document.body.addEventListener("mouseup", () => {
  mouseDown = false;
});

// Create grid given a size and clear the old one if applicable
function createGrid(size) {
  container.innerHTML = "";
  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < size; j++) {
      let block = document.createElement("div");
      block.classList.add("block", "new");
      block.setAttribute("draggable", "false");
      block.addEventListener("dragstart", (e) => e.preventDefault());
      row.appendChild(block);
    }
    container.appendChild(row);
  }

  // add event listeners to blocks to color them
  let blocks = document.querySelectorAll(".block");
  blocks.forEach((element) =>
    element.addEventListener("mouseover", (e) => {
      if(!mouseDown) return;

      if (rainbowMode) {
        // If rainbow mode is on, randomize the RGB background
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        e.target.classList.remove("new");
        e.target.style.backgroundColor =
          "rgb(" + red + "," + green + "," + blue + ")";
      } else {
        // Otherwise, color them black
        e.target.classList.add("hovered");
        e.target.classList.remove("new");
      }
    })
  );
}

// event listener for size button
document.querySelector("#size-btn").addEventListener("click", () => {
  input = document.querySelector("#size-input").value;
  if (isNumeric(input)) {
    gridSize = input < 100 ? input : 100;
  }
  createGrid(gridSize);
});
// event listener for reset button
document.querySelector("#reset-btn").addEventListener("click", () => {
  createGrid(gridSize);
});
//event listener for rainbow mode toggle
document.querySelector("#rainbow-btn").addEventListener("click", () => {
  rainbowMode = !rainbowMode;
});
//create initial grid
createGrid(gridSize);

//Check if string is a parsable number
function isNumeric(str) {
  return !isNaN(str) && !isNaN(parseFloat(str));
}
