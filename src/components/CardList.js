import React from "react";
import Card from "./Card";
import "../css/CardList.css";

const CardList = ({ characters, getQuote }) => {
  const charList = characters.length ? (
    characters.map((character) => {
      return (
        <Card
          character={character}
          key={character.char_id}
          getQuote={getQuote}
        />
      );
    })
  ) : (
    <div className="col s12 l6">
      <div className="card">
        <div className="card-content">
          <div className="card-title center">No characters yet</div>
        </div>
      </div>
    </div>
  );
  return <div className="card-styles">{charList}</div>;
};

export default CardList;
