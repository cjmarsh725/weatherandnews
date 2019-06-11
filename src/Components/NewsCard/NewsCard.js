import React from 'react';
import './NewsCard.css';

const NewsCard = props => {
  return props.urlToImage ? (
    <div className="newscard-container" onClick={() => {window.open(props.url, "_blank")}}>
      <div className="newscard-image">
        <img src={props.urlToImage} draggable="false" alt={props.title} />
      </div>
      <div className="newscard-content">
        <div className="newscard-title">{props.title}</div>
        <div className="newscard-description">{props.description}</div>
      </div>
    </div>
  ) : null;
}

export default NewsCard;