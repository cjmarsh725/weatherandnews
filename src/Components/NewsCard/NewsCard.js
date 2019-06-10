import React from 'react';
import './NewsCard.css';

const NewsCard = props => {
  return (
    <div className="newscard-container">
      <div className="newscard-image">
        <img src={props.urlToImage} draggable="false" alt={props.title} />
      </div>
      <div className="newscard-content">
        <div className="newscard-title">{props.title}</div>
        <div className="newscard-description">{props.description}</div>
      </div>
    </div>
  );
}

export default NewsCard;