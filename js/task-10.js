function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    boxesDiv.appendChild(box);
    size += 10;
  }
  console.log(`Було створено ${amount} блоків!`);
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
  console.log(`Було знищено всі блоки!`);
}

createBtn.addEventListener("click", () => {
  createBoxes(inputEl.value);
});

destroyBtn.addEventListener("click", destroyBoxes);
