/* eslint-disable no-unused-vars */
import { Character } from "./character";

export class Advisor extends Character {
  constructor(name, family, age, advisedPerson) {
    super(name, family, age);
  }
  sayHello() {
    super.sayHello();
    return "No sé por qué, pero creo que voy a morir pronto";
  }
}
