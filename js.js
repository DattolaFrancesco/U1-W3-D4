const h2 = document.getElementsByTagName("h2")[0];
const h1 = document.getElementsByTagName("h1")[0];
const btn = document.getElementsByTagName("button")[0];
let n = 0;
let numeroPlayer = parseInt(prompt("numero di celle con cui vuoi giocare"));
let arrayCells = [];
let arrayPlayerCells = [];
const cellCreation = () => {
  const cellContainer = document.querySelector("#cellContainer");
  for (let i = 0; i < 76; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    const number = document.createElement("h3");
    number.innerText = i + 1;
    cellContainer.appendChild(cell);
    cell.appendChild(number);
    arrayCells.push(cell);
  }
};
const playerCellCreation = (n) => {
  const cellPlayerContainer = document.querySelector("#cellPlayer");
  for (let i = 0; i < n; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    const number = document.createElement("h3");
    number.innerText = i + 1;
    cellPlayerContainer.appendChild(cell);
    cell.appendChild(number);
    arrayPlayerCells.push(cell);
  }
};
playerCellCreation(numeroPlayer);
cellCreation();
btn.addEventListener("click", function () {
  if (arrayPlayerCells.every((el) => el.classList.contains("background"))) {
    h1.innerText = "HAI VINTO, TOMBOLA!";
    btn.style.display = "none";
  }
  let num = Math.ceil(Math.random() * 76);
  if (n <= 75) {
    if (arrayCells[num - 1].classList.contains("background")) {
      while (arrayCells[num - 1].classList.contains("background")) {
        num = Math.ceil(Math.random() * 76);
        h2.innerText = "NUMERO ESTRATTO : " + num;
      }
    }
  }
  if (num >= 0 && num <= numeroPlayer) {
    arrayPlayerCells[num - 1].classList.add("background");
  }
  arrayCells[num - 1].classList.add("background");
  h2.innerText = "NUMERO ESTRATTO : " + num;
  n++;
});
