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

  checkWinConditions(playerXArr, playerOArr) {

    playerXArr = this.playerXSquares.sort((a, b) => a - b);
    playerOArr = this.playerOSquares.sort((a, b) => a - b);

    let winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    winConditions.forEach((arr) => {
      if(JSON.stringify(playerXArr) === JSON.stringify(arr)) {
        document.querySelector('h2').innerText = 'X Wins'
      } else if (JSON.stringify(playerOArr) === JSON.stringify(arr)) {
        document.querySelector('h2').innerText = 'O Wins'
      } else {
        return false
      }
        // If either player array has more than 3 values this doesnt work !!!!!!!!
    })
  }
      
   
  
}

  
  




