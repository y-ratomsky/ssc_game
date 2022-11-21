const figures = ["камень", "ножницы", "бумага"];

function generateFigure() {
  let figureNum = Math.floor(Math.random() * 3);
  let figure = figures[figureNum];
  return figure;
}

let playerFigure;
let compFigure;

compFigure = generateFigure();

const stone = document.querySelector(".stone");
const scissor = document.querySelector(".scissor");
const papper = document.querySelector(".papper");

stone.addEventListener("click", function () {
  stone.classList.add("item__choosen");
  playerFigure = "";
  playerFigure = "камень";

  const playerArea = document.querySelector(".player__figure");
  playerArea.textContent = playerFigure;
});

scissor.addEventListener("click", function () {
  scissor.classList.add("item__choosen");
  playerFigure = "";
  playerFigure = "ножницы";

  const playerArea = document.querySelector(".player__figure");
  playerArea.textContent = playerFigure;
});

papper.addEventListener("click", function () {
  papper.classList.add("item__choosen");
  playerFigure = "";
  playerFigure = "бумага";

  const playerArea = document.querySelector(".player__figure");
  playerArea.textContent = playerFigure;
});

const btnStart = document.querySelector(".btn__start");

btnStart.addEventListener("click", function () {
  const resultBox = document.querySelector(".result__box");
  resultBox.classList.remove("hidden");

  const playerArea = document.querySelector(".player__figure");
  playerArea.textContent = playerFigure;

  const compArea = document.querySelector(".comp__figure");
  compArea.textContent = compFigure;

  const result = document.querySelector(".result");

  if (playerFigure == figures[0] && compFigure == figures[0]) {
    result.textContent = "Ничья";
  } else if (playerFigure == figures[0] && compFigure == figures[1]) {
    result.textContent = "Вы выиграли";
  } else if (playerFigure == figures[0] && compFigure == figures[2]) {
    result.textContent = "Вы проиграли";
  } else if (playerFigure == figures[1] && compFigure == figures[0]) {
    result.textContent = "Вы проиграли";
  } else if (playerFigure == figures[1] && compFigure == figures[1]) {
    result.textContent = "Ничья";
  } else if (playerFigure == figures[1] && compFigure == figures[2]) {
    result.textContent = "Вы выиграли";
  } else if (playerFigure == figures[2] && compFigure == figures[0]) {
    result.textContent = "Вы выиграли";
  } else if (playerFigure == figures[2] && compFigure == figures[1]) {
    result.textContent = "Вы проиграли";
  } else if (playerFigure == figures[2] && compFigure == figures[2]) {
    result.textContent = "Ничья";
  }
});

const btnReset = document.querySelector(".btn__reset");
btnReset.addEventListener("click", function () {
  playerFigure = "";
  compFigure = generateFigure();

  const playerArea = document.querySelector(".player__figure");
  playerArea.textContent = "";

  const compArea = document.querySelector(".comp__figure");
  compArea.textContent = "";

  const result = document.querySelector(".result");
  result.textContent = "";

  const items = document.querySelectorAll(".item");

  for (i = 0; i < items.length; i++) {
    if (items[i].classList.contains("item__choosen")) {
      items[i].classList.remove("item__choosen");
    }
  }
});
