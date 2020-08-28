import React from "react";
import Card from "./Card";
import "../css/CardList.css";

const CardList = ({ characters, getQuote }) => {
  const charList =
    characters.length && Array.isArray(characters) ? (
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
      <div className="card-wrapper">
        <div className="card">
          <div className="card-content">
            <div className="card-title center">{characters}</div>
          </div>
        </div>
      </div>
    );
  return <div className="card-styles">{charList}</div>;
};

export default CardList;
