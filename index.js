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
*/ /////////////////////////////////////////////////////////////////////////

// document Object

let dom = {
  startGame: document.querySelector("#startGame"),
  playerIcon: document.querySelectorAll(".playerIcon"),
  grid: document.querySelector(".grid"),
};

// object that will replace false with TRUE once the BLOCK is selected

let squaresTaken = {
  "1": false,
  "2": false,
  "3": false,
  "4": false,
  "5": false,
  "6": false,
  "7": false,
  "8": false,
  "9": false,
};

// object that will represent which player is active/whos turn is it

let players = {
  one: false,
  two: false,
};

// id's of block values that got selected will be pushed into the correspodning array
// IE = if its playersOne turn it will push into playerOne array, playerTwo will push into thier own array
// we will loop through array after EACH click to check for win conditions

let playerSquaresOne = [];
let playerSquarestwo = [];

// activate the board/game
dom.startGame.addEventListener("click", boardState);

// this function starts the game and will create a random "first Player"
function boardState() {
  dom.grid.classList.remove("hide");
  goesFirst();
}

// will randomizer a player and will also set that player as 'true' meaning active
function goesFirst() {
  let random = Math.trunc(Math.random() * 2);
  dom.playerIcon[random].classList.add("active");
  if (random === 0) {
    players.one = true;
  } else {
    players.two = true;
  }
  console.log(players);
}

// handles anytime a person clicks on the block values(grid)
dom.grid.addEventListener("click", boardStateBubbling);

// function that runs each time a tile/block value is clicked and pushes to ONLY playerOne for now
// will defintely be cleaned up and will need to be reworked to make the ACTIVE player push into
// thier corresponding array
function boardStateBubbling(e) {
  // this checks which player is active
  togglePlayer();
  // this below will need to be redone to allow active player to push into corresponding array
  // will need a function that checks if that square is availble
  playerSquaresOne.push(+e.target.id);
  // this checks which player is an X or O and changes the innerHTML accordingly
  e.target.innerHTML = choice;
  // this will change the tiles that have been taken from false to true
  squaresTaken[e.target.id] = true;
}

// allow us to assign X or O
let choice;

// will toggle between the players that are active(whos turn is it) and will change the other player
// to then be active
function togglePlayer() {
  // if playerone is active - do something
  if (players.one === true) {
    // changes playerOne to not active
    players.one = false;
    // changes the second player to active
    players.two = true;
    // player one is X - this can be changed
    choice = "X";
  } // if the second player is active
  else if (players.two === true) {
    // change the fire player to active
    players.one = true;
    // change the second player to non-active
    players.two = false;
    // assigns second player O - this can also be changed
    choice = "O";
  }
  // this will change the CSS active class once a player has selected a tile
  // this will need to be put into logic that checks to see if a square is able to be selected -
  // IE if the square is alrdy selected it is still thier turn so we dont want to execute this function
  addActiveClass();
}

// displays the CSS active player icon

function addActiveClass() {
  // checks if player one is active
  if (players.one === true) {
    // will remove active from player one
    dom.playerIcon[0].classList.add("active");
    // will add active to player Two
    dom.playerIcon[1].classList.remove("active");
  } else {
    // will add active to player Two
    dom.playerIcon[1].classList.add("active");
    // will remove active from player one
    dom.playerIcon[0].classList.remove("active");
  }
}

// yup.... did not touch - will need help on tieing these classes in

// dom.playerIcon[0].classList.add('active')
class Board {
  constructor() {}

  // show the game board
}

class Game {
  constructor() {}
}

class Player {
  constructor() {}

  randomizer() {
    return Math.trunc(Math.random() * 2) + 1;
  }

  activePlayer() {
    // will add the active class to whos turn is it
    dom.playerIcon[0].classList.add("active");
  }
  togglePlayer(el) {
    // target the correct players turn
    // randomizer 1 or 2 will select the proper array element
  }

  // document.querySelector('#test').addEventListener('click', activePlayer)
}
