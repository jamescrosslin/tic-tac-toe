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
    if(this.board.checkWinConditions(this.activePlayer)) return true;
    this.changeActivePlayer();
  }

  
}