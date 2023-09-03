/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./Card.css";
import { useState, useEffect } from "react";
export const Card = ({ item }) => {
  const [live, setLive] = useState(item.isLive);

  const handleDie = () => {
    item.die();
    setLive(!item.isLive);
  };

  useEffect(() => {
    handleDie;
  }, [live]);

  return (
    <li className="character col">
      <div className="card character__card">
        <img
          src={`../../public/img/${item.name}.jpeg`}
          alt="Nombre y familia del personaje"
          className="character__picture card-img-top"
        />
        <div className="card-body">
          <h2 className="character__name card-title h4">
            {item.name} {item.family}
          </h2>
          <div className="character__info">
            <ul className="list-unstyled">
              <li>Edad: {item.age} años</li>
              <li>
                Estado: {item.isLive}
                {item.isLive ? (
                  <i className="fas fa-thumbs-up"></i>
                ) : (
                  <i className="fas fa-thumbs-down"></i>
                )}
              </li>
            </ul>
          </div>
          <div className="character__overlay">
            <ul className="list-unstyled">
              {item.kingdomYears && (
                <li>Años de reinado: {item.kingdomYears}</li>
              )}
              {item.weapon && (
                <>
                  <li>Arma: {item.weapon}</li>
                  <li>Destreza: {item.skill}</li>
                </>
              )}
              {item.advisedPerson && <li>Asesora a: {item.advisedPerson}</li>}
              {item.servility && (
                <>
                  <li>Peloteo: {item.servility}</li>
                  <li>Sirve a: {item.servedPerson}</li>
                </>
              )}
            </ul>
            <div className="character__actions">
              <button className="character__action btn">Habla</button>
              <button onClick={handleDie} className="character__action btn">
                Muere
              </button>
            </div>
          </div>
        </div>
        {item.kingdomYears && <i className="emoji">👑</i>}
        {item.weapon && <i className="emoji">🗡</i>}
        {item.weapon && <i className="emoji">🗡</i>}
        {item.advisedPerson && <i className="emoji">🎓</i>}
        {item.servility && <i className="emoji">🛡</i>}
      </div>
    </li>
  );
};
