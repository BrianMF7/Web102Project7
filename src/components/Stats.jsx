import React from 'react';

const Stats = ({ spaceData }) => {
  const totalItems = spaceData.length;
  const imageCount = spaceData.filter(item => item.media_type === 'image').length;
           const videoCount = spaceData.filter(item => item.media_type === 'video').length;
  const averageExplanationLength = Math.round(
    spaceData.reduce((sum, item) => sum + item.explanation.length, 0) / (totalItems || 1)
         );

  return (
    <div className="statsContainer">
      <h2>Space Data Statistics</h2>
   <div className="statsGrid">
      <div className="statCard">
          <h3>Total Items</h3>
          <p className="statValue">{totalItems}</p>
        </div>
         <div className="statCard">
               <h3>Images vs Videos</h3>
          <p className="statValue">{imageCount} / {videoCount}</p>
        </div>
            <div className="statCard">
          <h3>Avg. Explanation Length</h3>
          <p className="statValue">{averageExplanationLength} chars</p>
        </div></div></div>);};

export default Stats; 