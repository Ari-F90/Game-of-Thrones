/* eslint-disable react/prop-types */
export const Card = ({ item }) => {
  console.log(item.name);
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
                <i className="fas fa-thumbs-down"></i>
                <i className="fas fa-thumbs-up"></i>
              </li>
            </ul>
          </div>
          <div className="character__overlay">
            <ul className="list-unstyled">
              <li>Años de reinado: {item.kingdomYears}</li>
              <li>Arma: {item.weapon}</li>
              <li>Destreza: {item.skill}</li>
              <li>Peloteo: {item.servility}</li>
              <li>Asesora a: {item.advisedPerson}</li>
              <li>Sirve a: {item.servedPerson}</li>
            </ul>
            <div className="character__actions">
              <button className="character__action btn">habla</button>
              <button className="character__action btn">muere</button>
            </div>
          </div>
        </div>
        <i className="emoji"></i>
      </div>
    </li>
  );
};
