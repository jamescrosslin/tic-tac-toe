class Game {
  constructor(players, board) {
    this.board = new Board(board);
    this.player1 = null;
    this.player2 = null;
    this.activePlayer = null;
    this.playerElements = players;
  }
  startGame() {
    function random() {
      return Math.trunc(Math.random() * 2);
    }

    const randomSymbol = random();
    const symbols = ["X", "O"];

    this.player1 = new Player(this.playerElements[0], symbols[randomSymbol]);
    this.player2 = new Player(
      this.playerElements[1],
      symbols[randomSymbol ? 0 : 1]
    );

    this.activePlayer = [this.player1, this.player2][random()];
    this.activePlayer.toggleActive();
  }
  changeActivePlayer() {
    [this.activePlayer] = [this.player1, this.player2].filter((player) =>
      player.toggleActive()
    );

  }

  handleSelection(square) {
    this.board.selectSquare(square, this.activePlayer);
    // I put the check win conditions method call here because i dont know where else would be better and it works
    if(this.board.checkWinConditions(this.activePlayer)) return true;
    this.changeActivePlayer();
  }

  // i must make a method that ends the game inputs here maybe adds a reset board button 
  // endGame(){

  // }
}