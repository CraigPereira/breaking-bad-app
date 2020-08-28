import React, { Component } from "react";
import axios from "axios";
import "./css/App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import CardList from "./components/CardList";
import Quote from "./components/Quote";

class App extends Component {
  state = {
    characters: null,
    search: "",
    quote: null,
  };
  setSearchField = (e) => {
    const name = e.target.value.trim();
    this.setState({
      search: name,
    });
  };
  onlyAlphabets = () => {
    const pattern = /^[A-Za-z]+$/;
    return pattern.test(this.state.search);
  };
  handleSumbit = (e) => {
    e.preventDefault();
    e.target.reset();
    if (this.onlyAlphabets()) {
      const path = "https://www.breakingbadapi.com/api/characters?name=";
      const name = this.state.search;
      axios.get(`${path + name}`).then((res) => {
        const characters = res.data.length
          ? res.data
          : "404 - Character Not Found";
        this.setState({
          characters,
          quote: null,
        });
      });
    } else {
      this.setState({
        characters: "Invalid Input",
        quote: null,
      });
    }
  };
  getQuote = (name) => {
    const path = "https://www.breakingbadapi.com/api/quote/random?author=";
    axios.get(`${path + name}`).then((res) => {
      const quote = res.data.length
        ? res.data[0].quote
        : "No quote avaliable for this character";
      this.setState({
        quote,
      });
      window.scrollTo(0, document.body.scrollHeight);
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
        {this.state.characters && (
          <CardList
            characters={this.state.characters}
            getQuote={this.getQuote}
          />
        )}
      </div>
    );
  }
}

export default App;
