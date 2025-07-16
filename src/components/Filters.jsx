import React from 'react';

const Filters = ({ dateFilter, setDateFilter, categoryFilter, setCategoryFilter }) => {
  return (
    <div className="filters">
      <div className="filterGroup">
        <h3>Date Range</h3>
        <div className="dateInputs">
          <input
            type="date"
      value={dateFilter.start}
          onChange={(e) => setDateFilter({ ...dateFilter, start: e.target.value })}
          />
          <span>to</span>
        <input
            type="date"
            value={dateFilter.end}
                onChange={(e) => setDateFilter({ ...dateFilter, end: e.target.value })}
          />
        </div>
             </div>
      
      <div className="filterGroup">
        <h3>Category</h3>
        <select 
          value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
           >
          <option value="all">All Categories</option>
          <option value="galaxy">Galaxies</option>
                   <option value="planet">Planets</option>
          <option value="star">Stars</option>
              <option value="moon">Moons</option>
          <option value="nebula">Nebulas</option>
              <option value="video">Videos</option>
          <option value="other">Other</option>
        </select>
      </div></div>);};

export default Filters; 