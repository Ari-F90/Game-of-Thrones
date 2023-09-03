// import { useState } from "react";
import { characters } from "../mocks/characters";

export const useCharacters = () => {
  // const [talk, setTalk] = useState({ talk: item.sayHello });

  // const handleTalk = () => {
  //   item.sayHello();

  //   setTalk(talk);
  // };

  return { characters };
};
