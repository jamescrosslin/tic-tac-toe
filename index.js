let dom = {
  startGame: document.querySelector("#startGame"),
  playerIcon: document.querySelectorAll(".playerIcon"),
  grid: document.querySelector(".grid"),
};

function boardStateBubbling(e) {
   e.target.classList.add("selected");
}



function addActiveClass() {
  for (const player of [...game.playerElements]) {
    player.classList.remove("active");
  }
  game.activePlayer.playerElement.classList.add("active");
}


let game= null;

dom.startGame.addEventListener("click", () => {
  dom.startGame.classList.add('hide')
  game = new Game(dom.playerIcon, dom.grid);
  game.startGame();
  dom.grid.classList.remove("hide");
  addActiveClass();
  
  
});

dom.grid.addEventListener("click", (e) => {
  if (e.target.tagName === "DIV" && !e.target.classList.contains("selected") && game) {
    e.target.innerHTML = game.activePlayer.symbol;
    boardStateBubbling(e);
    addActiveClass();
    if(game.handleSelection(e.target)){
      dom.startGame.classList.remove('hide');
      dom.startGame.innerText = 'New Game'
      return game = null} 
     
     
     
  }
});




