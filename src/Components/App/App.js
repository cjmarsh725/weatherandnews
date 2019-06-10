import React, {Component} from 'react';
import './App.css';
import WeatherColumn from '../WeatherColumn/WeatherColumn.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="title">News@Home</div>
        </div>
        <WeatherColumn />
      </div>
    );
  }
}

export default App;
