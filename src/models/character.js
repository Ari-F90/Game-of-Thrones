/* eslint-disable no-unused-vars */
export class Character {
  isLive;
  constructor(name, family, age) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.isLive = true;
  }

  sayHello() {
    return `Hola, soy ${this.name}`;
  }
  die() {
    this.isLive = false;
  }
  alive() {
    this.isLive = true;
  }
}
