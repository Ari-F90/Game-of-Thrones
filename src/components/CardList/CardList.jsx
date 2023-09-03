/* eslint-disable no-unused-vars */

import { useCharacters } from "../../hooks/useCharacters";
import { Card } from "../Card/Card";

import "./CardList.css";
export const CardList = () => {
  const { characters } = useCharacters();
  return (
    <ul className="characters-list row list-unstyled">
      {characters.map((item, x) => (
        <Card key={x} item={item} />
      ))}
    </ul>
  );
};
