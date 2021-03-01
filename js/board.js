
class Board {
  constructor(element) {
    this.gameBoard = element;
    this.squares = element.children;
    this.markedSquares = ["", "", "", "", "", "", "", "", ""];
  }
  checkSquares() {
    console.log(this.squares);
  }

  selectSquare(square, player) {
    let index = [...this.squares].indexOf(square);
    this.markedSquares[index] = player.symbol;
    console.log(this.markedSquares);
  }
=======
//1. board - individual boxes
class Board {
  constructor() {
    //references to boxes in the DOM called "squares"
  }
  //mark box method
  //check boxes for whether x or o

}
