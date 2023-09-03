import { useState } from "react";
import { characters } from "../mocks/characters";

export const useCharacters = () => {
  const [character] = characters;

  const [live, setLive] = useState({ live: character.isLive });
  const [talk, setTalk] = useState({ talk: character.sayHello() });
  const handleDie = () => {
    character.die();
    setLive(!live);
  };

  const handleTalk = () => {
    console.log(character.sayHello());
    setTalk(talk);
  };

  return { character, characters, live, handleDie, talk, handleTalk };
};
