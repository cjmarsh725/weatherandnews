import React from 'react';

const Card = props => {
  return (
    <div>
      <div>{props.day.name}</div>
    </div>
  );
};

export default Card;