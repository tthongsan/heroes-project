import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      heroes: []
    }
  }

  componentDidMount() {
    axios.get('/api/heroes').then(res => {
      this.setState({heroes: res.data})
    })
  }




  render() {
    const { heroes } = this.state;
    return (
      <div className="App">
        <h1>heroes</h1>
        {heroes.map(hero => {
          return <div className="hero">
            <div>Name: {hero.name} </div>
            <div>Superpowers: {hero.superpowers} </div>
            <div><img src={hero.picture_url} alt=""/></div>
          </div>
        })}
      </div>
    );
  }
}

export default App;
