import React from 'react';
import './Card.css';

const Card = props => {
  return (
    <div className="card-container">
      <div className="card-name">{props.name}</div>
      <div>{props.temperature}&deg;</div>
      <div><img src={props.icon} alt={props.shortForecast}/></div>
      <div>{props.shortForecast}</div>
    </div>
  );
};

export default Card;