import React from 'react';
import './WeatherCard.css';

const WeatherCard = props => {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={props.icon} alt={props.shortForecast} draggable="false"/>
      </div>
      <div className="description-container">
        <div className="description-name">{props.name}</div>
        <div className="description-temp">{props.temperature}&deg;</div>
        <div className="description-forecast">{props.detailedForecast}</div>
      </div>
    </div>
  );
};

export default WeatherCard;