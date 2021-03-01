k
class Game {
  constructor(players, board) {
    this.board = new Board(board);
    this.player1 = null;
    this.player2 = null;
    this.activePlayer = null;
  }
  startGame() {
    function random() {
      return Math.trunc(Math.random() * 2);
    }
    const randomSymbol = random();

    const symbols = ["X", "O"];

    this.player1 = new Player(players[0], symbols[randomSymbol]);

    this.player2 = new Player(players[1], symbols[randomSymbol ? 0 : 1]);

    // random numbers comes back 0/1 - selects a random index from the array formed
    this.activePlayer = [this.player1, this.player2][random()];
    this.activePlayer.toggleActive();
  }
  changeActivePlayer() {
    [this.activePlayer] = [this.player1, this.player2].filter((player) =>
      player.toggleActive()
    );
    //dom.playerIcon[0].classList.add("active");
  }

  handleSelection(square) {
    this.board.selectSquare(square, this.activePlayer);
    this.changeActivePlayer();
  }
=======
//3. game itself - game start & reset - winconditions

class Game {
  constructor() {
    // new Board
    // new Players
    // win conditions
    // active player
    // is game active
  }
  /* 
  handle turn
     mark a square on the board - we don't want to change "squares" from here directly
     so instead we would do something like board.markBox(selection)
  */
  /*
  start game
    display board
  */
  //end game
}
