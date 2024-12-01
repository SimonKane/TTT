const gameboard = document.querySelector(".gameboard");
const infoText = document.querySelector(".infotext");

const cells = ["", "", "", "", "", "", "", "", ""];

let go = "circle";

let message = "Circle goes first";

infoText.innerHTML = message;

function createBoard() {
  cells.forEach((_cell, i) => {
    let square = document.createElement("div");
    square.classList.add("square");
    gameboard.append(square);
    square.addEventListener("click", addGo);
    square.style.boxSizing = "border-box";
  });
}

function addGo(e) {
  const box = document.createElement("div");
  box.classList.add(go);
  e.target.append(box);
  go = go === "circle" ? "cross" : "circle";
}

createBoard();
