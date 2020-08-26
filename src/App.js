import React, { Component } from "react";
import axios from "axios";
import "./css/App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import CardList from "./components/CardList";

class App extends Component {
  state = {
    characters: [],
    search: "",
  };
  setSearchField = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  handleSumbit = (e) => {
    e.preventDefault();
    const path = "https://www.breakingbadapi.com/api/characters?name=";
    const name = this.state.search;
    axios.get(`${path + name}`).then((res) => {
      this.setState({
        characters: res.data,
      });
    });
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        <SearchBar
          characters={this.state.characters}
          setSearchField={this.setSearchField}
          handleSumbit={this.handleSumbit}
        />
        <CardList characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
