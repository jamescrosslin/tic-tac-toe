
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
  // checks if player one is active
  if (players.one === true) {
    // will remove active from player one
    dom.playerIcon[0].classList.add("active");
    // will add active to player Two
    dom.playerIcon[1].classList.remove("active");
  } else {
    // will add active to player Two
    dom.playerIcon[1].classList.add("active");
    // will remove active from player one
    dom.playerIcon[0].classList.remove("active");
  }
}

// yup.... did not touch - will need help on tieing these classes in
let game;
// dom.playerIcon[0].classList.add('active')
dom.startGame.addEventListener("click", () => {
  game = new Game(dom.playerIcon, dom.grid);
  game.startGame();
  dom.grid.classList.remove("hide");
});

dom.grid.addEventListener("click", (e) => {
  if (e.target.tagName === "DIV" && !e.target.classList.contains("selected")) {
    game.handleSelection(e.target);
    console.log("test");
    boardStateBubbling(e);
  }
});
=======
/*
  4. script - logic for computer player?  - listen for user interaction
*/

