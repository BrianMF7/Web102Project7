import React from 'react';
import { Link } from 'react-router-dom';

const SpaceCard = ({ item }) => {
  return (
    <Link to={`/detail/${item.date}`} className="cardLink">
      <div className="spaceCard">
        <div className="spaceImage">
          {item.media_type === 'image' ? (
            <img src={item.url} alt={item.title} />
          ) : (
            <div className="videoPlaceholder">
              <span>Video Content</span>
            </div>
          )}
        </div>
        <div className="spaceInfo">
          <h3>{item.title}</h3>
          <p className="date">{item.date}</p>
          <p className="category">Category: {item.category}</p>
          <p className="explanation">{item.explanation.substring(0, 150)}...</p>
        </div>
      </div>
    </Link>);};

export default SpaceCard; 