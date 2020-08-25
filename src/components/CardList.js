import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";
import "../css/CardList.css";

class CardList extends Component {
  state = {
    characters: [],
  };
  componentDidMount() {
    axios.get("https://www.breakingbadapi.com/api/characters").then((res) => {
      this.setState({
        characters: res.data.slice(0, 20),
      });
    });
  }
  render() {
    const { characters } = this.state;
    const charList = characters.length ? (
      characters.map((character) => {
        return <Card character={character} key={character.char_id} />;
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
  }
}
export default CardList;
