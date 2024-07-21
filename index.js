const container = document.querySelector(".container");
let size = 3;

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
