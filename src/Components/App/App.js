import React, {Component} from 'react';
import './App.css';
import WeatherColumn from '../WeatherColumn/WeatherColumn.js';
import NewsColumn from '../NewsColumn/NewsColumn.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="title">Weather and News</div>
        </div>
        <div className="main-content">
          <WeatherColumn />
          <NewsColumn />
        </div>
      </div>
    );
  }
}

export default App;
