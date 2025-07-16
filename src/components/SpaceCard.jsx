import React from 'react';

const SpaceCard = ({ item }) => {
  return (
    <div className="spaceCard">
   <div className="spaceImage">
    {item.media_type === 'image' ? (
          <img src={item.url} alt={item.title} />
        ) : (
          <div className="videoPlaceholder">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              Watch Video
            </a>
          </div>
        )}
         </div>
             <div className="spaceInfo">
             <h3>{item.title}</h3>
        <p className="date">{item.date}</p>
        <p className="category">Category: {item.category}</p>
            <p className="explanation">{item.explanation.substring(0, 150)}...</p>
      </div>
    </div>);};

export default SpaceCard; 