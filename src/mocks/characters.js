/* eslint-disable no-unused-vars */
import { Character } from "../models/character.js";
import { King } from "../models/king.js";
import { Fighter } from "../models/fighter.js";
import { Advisor } from "../models/advisor.js";
import { Squire } from "../models/squire.js";

export const characters = [
  new King("Joffrey", "Baratheon", 36, 15),
  new Fighter("Jaime", "Lannister", 34, "sword", 5),
  new Fighter("Daenerys", "Targaryen", 36, "hammer", 10),
];

characters.push(new Advisor("Tyrion", "Lannister", 45, characters[2].name));
characters.push(new Squire("Bronn", "Wilson", 50, characters[1].name, 7));
