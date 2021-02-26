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
  playerIcon: document.querySelectorAll('.playerIcon')
}

function randomizer() {
   return Math.trunc(Math.random() *2) +1
}

function activePlayer () {
  // will add the active class to whos turn is it
 dom.playerIcon[0].classList.add('active')
}

document.querySelector('#test').addEventListener('click', activePlayer)


class Game {
  constructor() {}
}

class Player {
  constructor() {}

  togglePlayer (el) {
    // target the correct players turn
    // randomizer 1 or 2 will select the proper array element

  }



}

class Board {
  constructor() {}
}



