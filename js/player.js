
class Player {
  constructor(element, symbol) {
    this.playerElement = element;
    this.active = false;
    this.symbol = symbol;
  }
  toggleActive() {
    this.active = !this.active;
    console.log(this.active);
    return this.active;
  }
  // document.querySelector('#test').addEventListener('click', activePlayer)
}
=======
//2. players - X and O -

