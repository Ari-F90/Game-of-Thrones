/* eslint-disable no-unused-vars */
import { useCharacters } from "../../hooks/useCharacters";
import "./Communications.css";

export const Communications = () => {
  const { handleTalk } = useCharacters();
  return (
    true && (
      <div className="comunications.on">
        <p className="comunications__text display-1">hello</p>
        <img
          className="comunications__picture"
          src="../../public/img/no-one.png"
          alt="Nombre y familia del que habla"
        />
      </div>
    )
  );
};
