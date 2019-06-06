import React, {Component} from 'react';
import './App.css';
import Card from '../Card/Card.js';
import axios from 'axios';

class App extends Component {
  state = {
    weatherData: []
  }

  componentDidMount() {
    axios.get("https://api.weather.gov/gridpoints/MTR/97,106/forecast")
      .then(response => this.setState({weatherData: response.data.properties.periods}))
      .catch(err => alert("There was an error loading the page: " + err));
  }

  render() {
    return (
      <div className="App">
        {this.state.weatherData.map((day, i) => {
          return (
            <Card {...day} key={i}/>
          );
        })}
      </div>
    );
  }
}

export default App;
