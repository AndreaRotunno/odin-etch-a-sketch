const container = document.querySelector(".container");
let rainbowMode = false;
let gridSize = 16;
// Create grid given a size and clear the old one if applicable
function createGrid(size) {
  container.innerHTML = "";
  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < size; j++) {
      let block = document.createElement("div");
      block.classList.add("block", "new");
      row.appendChild(block);
    }
    container.appendChild(row);
  }
  // add event listeners to blocks to color them
  let blocks = document.querySelectorAll(".block");
  blocks.forEach((element) =>
    element.addEventListener("mouseover", (e) => {
      // If rainbow mode is on, randomize the RGB background
      if (rainbowMode) {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        e.target.classList.remove("new");
        e.target.style.backgroundColor =
          "rgb(" + red + "," + green + "," + blue + ")";
        console.log(e.target.style.backgroundColor);
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

function isNumeric(str) {
  return (
    !isNaN(str) && 
    !isNaN(parseFloat(str))
  ); 
}