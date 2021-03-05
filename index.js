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


let game;

dom.startGame.addEventListener("click", () => {
  dom.startGame.classList.add('hide')
  game = new Game(dom.playerIcon, dom.grid);
  game.startGame();
  addActiveClass();
  dom.grid.classList.remove("hide");
  // document.getElementById(`${game.player1.symbol}`).innerText = game.player1.symbol;
  // document.getElementById(`${game.player2.symbol}`).innerText = game.player2.symbol;
 
  
});

dom.grid.addEventListener("click", (e) => {
  if (e.target.tagName === "DIV" && !e.target.classList.contains("selected") && game) {
    e.target.innerHTML = game.activePlayer.symbol;
        boardStateBubbling(e);    

      if(game.handleSelection(e.target)){
        dom.startGame.classList.remove('hide');
        dom.startGame.innerText = 'New Game'
        return game = null} 
  
  addActiveClass();
     
     
    } 
});




