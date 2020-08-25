import React, { Component } from "react";
import "./css/App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import CardList from "./components/CardList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SearchBar />
        <CardList />
      </div>
    );
  }
}

export default App;
