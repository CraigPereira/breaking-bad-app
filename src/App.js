import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import SearchBar from './components/Searchbar';

class App extends Component {
  state = {
    characters: [ ]
  }
  componentDidMount(){
    axios.get('https://www.breakingbadapi.com/api/characters')
      .then(res => {
        console.log(res.data);
        this.setState({
          characters: res.data.slice(0,20)
        })
      })
  }
  render(){
    const { characters } = this.state;
    const charList = characters.length ? (
      characters.map(character => {
        return (
          <div className="container" key={character.char_id}>
              <div className="row">
                <div className="col s12 l6">
                  <div className="card">
                    <div className="card-img center">
                      <img src={character.img} alt="Character" height="350px" width="300px"/>
                    </div>
                    <div className="card-content">
                      <h5 className="card-title center">Name: {character.name}</h5>
                      <h5 className="card-title center">Nickname: {character.nickname}</h5>
                      <h5 className="card-title center">Occupation: {character.occupation.join(', ')}</h5>
                      <h5 className="card-title center">Portrayed by: {character.portrayed}</h5>
                    </div>
                  </div>               
                </div>
              </div>
          </div>          
        )
      })
    ) : (
      <div className="container">
        <div className="col s12 l6">
          <div className="card center">
            <div className="card-content">No characters yet</div>
          </div>
        </div>
      </div>               
    )
    return (
      <div className="App">
        <Navbar />
        <SearchBar />
        { charList }
      </div>
    );
  }
}

export default App;
