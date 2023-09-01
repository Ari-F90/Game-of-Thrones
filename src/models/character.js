/* eslint-disable no-unused-vars */
export class Character {
  isLive;
  constructor(name, family, age) {
    this.isLive = true;
  }

  sayHello() {
    return `Hola, soy ${this.name}`;
  }
  die() {
    this.isLive = false;
  }
}
