/* eslint-disable no-unused-vars */
import { Character } from "./character";

export class Fighter extends Character {
  constructor(name, family, age, weapon, skill) {
    super(name, family, age);
    (this.weapon = weapon), (this.skill = skill);
  }
  sayHello() {
    super.sayHello();
    return "Primero pego y luego pregunto";
  }
}
