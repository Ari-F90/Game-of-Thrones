/* eslint-disable no-unused-vars */
import { characters } from "../mocks/characters";
import { Card } from "./Card";
export const CardList = () => {
  console.log(characters[0]);
  return (
    <ul className="characters-list row list-unstyled">
      {characters.map((item, x) => (
        <Card key={x} item={item} />
      ))}
    </ul>
  );
};
