/* eslint-disable no-unused-vars */
import { Character } from "./character";

export class King extends Character {
  constructor(name, family, age, kingdomYears) {
    super(name, family, age);
  }
  sayHello() {
    super.sayHello();
    return "Vais a morir todos";
  }
}
