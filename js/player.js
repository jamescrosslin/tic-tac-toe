class Player {
  constructor(element) {
    this.playerElement = element;
    this.active = false;
  }
  toggleActive() {
    this.active = !this.active;
    return this.active;
  }
  // document.querySelector('#test').addEventListener('click', activePlayer)
}
