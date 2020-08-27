import React, { Component } from "react";
import axios from "axios";
import "./css/App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import CardList from "./components/CardList";
import Quote from "./components/Quote";

class App extends Component {
  state = {
    characters: [],
    search: "",
    quote: null,
  };
  setSearchField = (e) => {
    const name = e.target.value.trim();
    this.setState({
      search: name,
    });
  };
  handleSumbit = (e) => {
    e.preventDefault();
    e.target.reset();
    const path = "https://www.breakingbadapi.com/api/characters?name=";
    const name = this.state.search;
    axios.get(`${path + name}`).then((res) => {
      this.setState({
        characters: res.data,
      });
    });
  };
  getQuote = (name) => {
    const path = "https://www.breakingbadapi.com/api/quote/random?author=";
    axios.get(`${path + name}`).then((res) => {
      this.setState({
        quote: res.data[0].quote,
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
        {this.state.quote && <Quote quote={this.state.quote} />}
        <CardList characters={this.state.characters} getQuote={this.getQuote} />
      </div>
    );
  }
}

export default App;
