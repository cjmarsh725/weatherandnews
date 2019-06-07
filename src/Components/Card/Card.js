import React from 'react';
import './Card.css';

const Card = props => {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={props.icon} alt={props.shortForecast}/>
      </div>
      <div className="description-container">
        <div className="description-name">{props.name}</div>
        <div className="description-temp">{props.temperature}&deg;</div>
        <div className="description-forecast">{props.shortForecast}</div>
      </div>
    </div>
  );
};

export default Card;