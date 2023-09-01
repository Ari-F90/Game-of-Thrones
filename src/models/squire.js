/* eslint-disable no-unused-vars */
import { Character } from "./character";

export class Squire extends Character {
  constructor(name, family, age, servedPerson, servility) {
    super(name, family, age);
  }
  sayHello() {
    super.sayHello();
    return "Soy un loser";
  }
}
