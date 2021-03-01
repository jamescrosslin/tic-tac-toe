// document Object
let dom = {
  startGame: document.querySelector("#startGame"),
  playerIcon: document.querySelectorAll(".playerIcon"),
  grid: document.querySelector(".grid"),
};

function boardStateBubbling(e) {
  // this checks which player is an X or O and changes the innerHTML accordingly
  e.target.classList.add("selected");
}

// displays the CSS active player icon

function addActiveClass() {
  for (const player of [...game.playerElements]) {
    player.classList.remove("active");
  }
  game.activePlayer.playerElement.classList.add("active");
}

// yup.... did not touch - will need help on tieing these classes in
let game;
// dom.playerIcon[0].classList.add('active')
dom.startGame.addEventListener("click", () => {
  game = new Game(dom.playerIcon, dom.grid);
  game.startGame();
  dom.grid.classList.remove("hide");
  addActiveClass();
});

dom.grid.addEventListener("click", (e) => {
  if (e.target.tagName === "DIV" && !e.target.classList.contains("selected")) {
    game.handleSelection(e.target);

    boardStateBubbling(e);
    addActiveClass();
  }
});
/*
  4. script - logic for computer player?  - listen for user interaction
*/
