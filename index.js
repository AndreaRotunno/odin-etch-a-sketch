const container = document.querySelector(".container");

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
  let blocks = document.querySelectorAll(".block");
  blocks.forEach((element) =>
    element.addEventListener("mouseover", (e) => {
      e.target.classList.add("hovered");
      e.target.classList.remove("new");
    })
  );
}
document.querySelector("#size-btn").addEventListener("click", () => {
  let input = prompt("Enter grid size");
  createGrid(input);
});
document.querySelector("#reset-btn").addEventListener("click", () => {
  let blocks = document.querySelectorAll(".block");
  blocks.forEach((e) => {
    e.classList.remove("hovered");
    e.classList.add("new");
  });
});
createGrid(16);
