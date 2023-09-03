/* eslint-disable no-unused-vars */
import { useCharacters } from "../../hooks/useCharacters";
import "./Communications.css";

export const Communications = () => {
  const { character } = useCharacters();
  return (
    <div className="comunications">
      <p className="comunications__text display-1">{character.sayHello}</p>
      <img
        className="comunications__picture"
        src="img/no-one.jpg"
        alt="Nombre y familia del que habla"
      />
    </div>
  );
};
