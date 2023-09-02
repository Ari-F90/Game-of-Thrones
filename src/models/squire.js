/* eslint-disable no-unused-vars */
import { Character } from "./character";

export class Squire extends Character {
  constructor(name, family, age, servedPerson, servility) {
    super(name, family, age);
    this.servedPerson = servedPerson;
    this.servility = servility;
  }
  sayHello() {
    super.sayHello();
    return "Soy un loser";
  }
}
