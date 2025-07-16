import React from 'react';
import SpaceCard from './SpaceCard';

const SpaceList = ({ filteredData }) => {
  return (
         <div className="spaceList">
      <h2>Space Images ({filteredData.length})</h2>
      {filteredData.length === 0 ? (
        <p>No space data matches your criteria.</p>
      ) : (
        <div className="spaceGrid">
          {filteredData.map(item => (
            <SpaceCard key={item.date} item={item} />
          ))}
        </div>
      )}</div>);};

export default SpaceList; 