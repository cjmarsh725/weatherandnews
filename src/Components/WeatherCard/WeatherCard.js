import React from 'react';
import './WeatherCard.css';

const WeatherCard = props => {
  return (
    <div className="card-container" onClick={() => props.toggle(props.index)}>
      <div className="temperature-container">
        <div className="temperature-name">{props.name}</div>
        <div className="temperature-temp">{props.temperature}&deg;</div>
      </div>
      <div className={"forecast-container" + (props.isHidden? " collapsed" : "")}>
        <div className="forecast-title">
          <div className="forecast-title-label">Forecast</div>
          <div className="img-container">
            <img src={props.icon} alt={props.shortForecast} draggable="false"/>
          </div>
        </div>
        <div className="forecast">{props.detailedForecast}</div>
      </div>
    </div>
  );
};

export default WeatherCard;