class Game {
  constructor(players, board) {
    this.board = new Board(board);
    this.player1 = new Player(players[0]);
    this.player2 = new Player(players[1]);
    this.activePlayer = null;
  }
  startGame() {
    this.board.squares;
  }
  changeActivePlayer() {
    [this.activePlayer] = [this.player1, this.player2].filter((player) =>
      player.toggleActive()
    );
    //dom.playerIcon[0].classList.add("active");
  }
}
