class Player {
  constructor(element, symbol) {
    this.playerElement = element;
    this.active = false;
    this.symbol = symbol;
  }
  toggleActive() {
    this.active = !this.active;
    return this.active;
  }
  
}


