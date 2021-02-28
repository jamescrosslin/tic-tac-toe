class Board {
  constructor(element) {
    this.gameBoard = element;
    this.squares = element.children;
    this.markedSquares = ['','','','','','','','','']
  }
  checkSquares() {
    this.squares
    console.log(this.squares)
  }

  selectSquare(square,player) {

    let index =[...this.squares].indexOf(square)
    this.markedSquares[index] = player.symbol
    console.log(this.markedSquares)
    // show the game board
    // listen for a click on a square
    // we need reference an object/array
    // keep track of whats marked/available
    // empty array => push whenver a square selected
    // function that checks to see if that number that
  }
  
}
