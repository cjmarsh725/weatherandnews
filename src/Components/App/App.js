import React, {Component} from 'react';
import './App.css';
import WeatherCard from '../WeatherCard/WeatherCard.js';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: [],
      placeholder: localStorage.getItem("placeholder") || "Sunnyvale, CA, USA",
      location: ""
    }

    this.inputChange = this.inputChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.filterAddress = this.filterAddress.bind(this);
    this.getAddressData = this.getAddressData.bind(this);
    this.getWeatherData = this.getWeatherData.bind(this);
  }

  componentDidMount() {
    // Default is Sunnyvale, CA - lat: 37.36883, lng: -122.0363496
    this.getWeatherData({
      lat: localStorage.getItem("coords-lat") || 37.36883,
      lng: localStorage.getItem("coords-lng") || -122.0363496,
    });
  }

  inputChange(e) {
    this.setState({location: e.target.value});
  }

  keyPress(e) {
    if (e.keyCode === 13 && e.target.value !== "") {
      e.target.value = "";
      e.target.blur();
      this.getAddressData(this.state.location);
    }
  }

  // Creates string out of address components, omitting unnecessary description
  filterAddress(address) {
    let filtered = [];
    for (let i = 0; i < address.length; i++) {
      if (address[i].types.indexOf("political") > -1 &&
          !(address[i].types.indexOf("administrative_area_level_2") > -1)) {
        if (address.length > 2) filtered.push(address[i].short_name);
        else filtered.push(address[i].long_name);
      }
    }
    return filtered.join(", ");
  }

  getAddressData(address) {
    // Get data from Google's Geocoding API for address
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.location}&components=country:US&key=${process.env.REACT_APP_MAPS_API_KEY}`)
    .then(response => {
      // If the address search has no results then only reset the location
      if (response.data.status === "ZERO_RESULTS") {
        this.setState({location: ""});
      } else {
        const coords = response.data.results[0].geometry.location;
        const placeholder = this.filterAddress(response.data.results[0].address_components)
        this.getWeatherData(coords);
        this.setState({location: "", placeholder: placeholder});
        localStorage.setItem("coords-lat", coords.lat);
        localStorage.setItem("coords-lng", coords.lng);
        localStorage.setItem("placeholder", placeholder);
      }
    })
    .catch(err => alert("There was an error loading the data: " + err));
  }

  getWeatherData(coords) {
    axios.get(`https://api.weather.gov/points/${coords.lat},${coords.lng}`)
      .then(response => {
        axios.get(response.data.properties.forecast)
          .then(response2 => this.setState({weatherData: response2.data.properties.periods}));
      })
      .catch(err => alert("There was an error fetching the weather data: " + err));
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="title">News@Home</div>
        </div>
        <div className="weather">
          <input className="location" 
                  type="text" 
                  placeholder={this.state.placeholder} 
                  onChange={this.inputChange} 
                  onKeyDown={this.keyPress}/>
          {this.state.weatherData.map((day, i) => {
            if (!day.isDaytime) return null;
            return (
              <WeatherCard {...day} key={i}/>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
