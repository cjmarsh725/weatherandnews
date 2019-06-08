import React, {Component} from 'react';
import './App.css';
import Card from '../Card/Card.js';
import axios from 'axios';

class App extends Component {
  state = {
    weatherData: [],
    location: ""
  }

  componentDidMount() {
    axios.get("https://api.weather.gov/gridpoints/MTR/97,106/forecast")
      .then(response => this.setState({weatherData: response.data.properties.periods}))
      .catch(err => alert("There was an error loading the page: " + err));
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="title">News@Home</div>
        </div>
        <div className="weather">
          <input className="location" type="text" value={this.state.location} />
          {this.state.weatherData.map((day, i) => {
            if (!day.isDaytime) return null;
            return (
              <Card {...day} key={i}/>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
