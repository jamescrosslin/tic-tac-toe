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
    // console.log(index);
    this[`player${player.symbol}Squares`].push(index);
  }

   
  
}

  
  




// Horizontal Wins [0,1,2] [3,4,5] [6,7,8]
// Vertical Wins   [0,3,6] [1,4,7] [2,5,8]
// Diagonal Wins   [0,4,8] [2,4,6]

//  let winConditions= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]



// checkWinConditions() {
//   let winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
//   winConditions.forEach((x)=>{
//     if(playerXSquares == x || playerOSquares == x){
//     console.log('win')
//     }
//   })
//   checkWinConditions()
  
// }