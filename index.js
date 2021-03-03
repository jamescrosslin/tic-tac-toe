let dom = {
  startGame: document.querySelector("#startGame"),
  playerIcon: document.querySelectorAll(".playerIcon"),
  grid: document.querySelector(".grid"),
};

function boardStateBubbling(e) {
   e.target.classList.add("selected");
}

// displays the CSS active player icon

function addActiveClass() {
  for (const player of [...game.playerElements]) {
    player.classList.remove("active");
  }
  game.activePlayer.playerElement.classList.add("active");
}


let game;
dom.startGame.addEventListener("click", () => {
  game = new Game(dom.playerIcon, dom.grid);
  game.startGame();
  dom.grid.classList.remove("hide");
  addActiveClass();
});

dom.grid.addEventListener("click", (e) => {
  if (e.target.tagName === "DIV" && !e.target.classList.contains("selected") && game) {
    e.target.innerHTML = game.activePlayer.symbol;
    boardStateBubbling(e);
    if(game.handleSelection(e.target)) return game = "" ;
    addActiveClass();


  }
});



