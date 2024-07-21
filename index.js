const container = document.querySelector(".container");
let size = 3;

for (let i = 0; i < size; i++) {
  let row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < size; j++) {
    let block = document.createElement("div");
    block.classList.add("block");
    row.appendChild(block);
  }
  container.appendChild(row);
}
