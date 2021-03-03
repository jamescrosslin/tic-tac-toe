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
    this[`player${player.symbol}Squares`].push(index);
  }

  checkWinConditions(player) {
    let winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (let condition of winConditions) {
      if (condition.every((val) =>this[`player${player.symbol}Squares`].includes(val))) {
        document.querySelector("h2").innerText = `${player.symbol} Wins`;
        return true;
      }
      return false;
    }
  }
  
  }



