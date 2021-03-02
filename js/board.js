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

    playerXArr.sort((a, b) => a - b);
    playerOArr.sort((a, b) => a - b);

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
        console.log('X win')
      } else if (JSON.stringify(playerOArr) === JSON.stringify(arr)) {
        console.log('O wins')
      } else {
        return false
      }
        // If either player array has more than 3 values this doesnt work also its not called anywhere
    })
  }
      
   
  
}

  
  




// Horizontal Wins [0,1,2] [3,4,5] [6,7,8]
// Vertical Wins   [0,3,6] [1,4,7] [2,5,8]
// Diagonal Wins   [0,4,8] [2,4,6]

//  let winConditions= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]



//  function checkWinConditions() {
//   let winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
//   winConditions.forEach((x)=>{
//     if(playerXsquares.includes(x)){
//     console.log('win')
//     }
//   })
  
  
// }

//arr1.every(val => arr2.includes(val))


// if(playerXSquares.every(val => winConditions.includes(val)))