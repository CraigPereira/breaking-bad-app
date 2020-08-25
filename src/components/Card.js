import React from "react";
import "../css/Card.css";

const Card = ({ character }) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-img center">
          <img
            src={character.img}
            alt="Character"
            height="350px"
            width="300px"
          />
        </div>
        <div className="card-content">
          <h5 className="card-title center">Name: {character.name}</h5>
          <h5 className="card-title center">Nickname: {character.nickname}</h5>
          <h5 className="card-title center">
            Occupation: {character.occupation.join(", ")}
          </h5>
          <h5 className="card-title center">
            Portrayed by: {character.portrayed}
          </h5>
          <div className="center">
            <button>Get Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
