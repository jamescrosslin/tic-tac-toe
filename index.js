/*/////////////////////////////////////////////////////////////////////////

                        Tic tac Toe group Project
      1. randomizer - see who starts the game
        create a border or a way to tell whos turn is it
      2. create player objects - using constructor
        what do we want them to have?
      3. create html grid lay out
              [123
              456
              789]
      4. create function to Toggle between players
*//////////////////////////////////////////////////////////////////////////

// document Object

let dom = {
  startGame: document.querySelector('#startGame'),
  playerIcon: document.querySelectorAll('.playerIcon'),
  grid: document.querySelector('.grid'),
}



let squaresTaken = {
  '1': false,
  '2': false,
  '3': false,
  '4': false,
  '5': false,
  '6': false,
  '7': false,
  '8': false,
  '9': false
}

let players = {
  one: 1,
  two: 2
}

let playerSquaresOne = []
let playerSquarestwo = []

dom.startGame.addEventListener('click', boardState)

 function boardState() {
 dom.grid.classList.remove('hide')
}

dom.grid.addEventListener('click', boardStateBubbling)



function boardStateBubbling(e) {
 playerSquaresOne.push(+e.target.id)
 e.target.innerHTML = 'X'
 squaresTaken[e.target.id] = true
 togglePlayer()
// console.log(squaresTaken)
//  console.log(playerSquaresOne)
//  console.dir(e.target)
}

function togglePlayer() {
  // listens for an event
  for (let keys in players) {
    if (players[keys] === true) {
      // given the active player state
      // given the active player css/state
      players[keys] = false
      console.log(players)
      console.log(players)
    }

  }
  // once event goes off go to the other player

}










// dom.playerIcon[0].classList.add('active')
class Board {
  constructor() {
    
  }
  

  // show the game board
  

}





class Game {
  constructor() {}
}

class Player {
  constructor() {
    
  }
  
  randomizer() {
    return Math.trunc(Math.random() *2) +1
  }
  
  activePlayer () {
    // will add the active class to whos turn is it
    dom.playerIcon[0].classList.add('active')
  }
  togglePlayer (el) {
    // target the correct players turn
    // randomizer 1 or 2 will select the proper array element
    
  }

  // document.querySelector('#test').addEventListener('click', activePlayer)
}



