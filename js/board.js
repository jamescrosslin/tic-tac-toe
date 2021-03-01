class Board {
  constructor(element) {
    this.gameBoard = element;
    this.squares = element.children;
    this.playerXSquares = [];
    this.playerOSquares = [];
  }
  checkSquares() {
    console.log(this.squares);
  }

  selectSquare(square, player) {
    let index = [...this.squares].indexOf(square);
    //interpolates either "X" or "O" into the string to get the correct property
    this[`player${player.symbol}Squares`].push(index);
  }
}
