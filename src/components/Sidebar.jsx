import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Navigation</h3>
      <ul className="sidebarMenu">
        <li><a href="/">Dashboard</a></li>
        <li><a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer">NASA Official Site</a></li>
        <li><a href="https://apod.nasa.gov/apod/astropix.html" target="_blank" rel="noopener noreferrer">NASA APOD</a></li>
      </ul>
      
      <div className="sidebarSection">
        <h3>About This Project</h3>
        <p>
          This dashboard shows NASA's Astronomy Picture of the Day (APOD) from the last 30 days.
          Each image links to a detailed view with more information.
        </p>
      </div>
      
      <div className="sidebarSection">
        <h3>Popular Categories</h3>
        <ul className="categoryList">
          <li>Galaxies</li>
          <li>Nebulae</li>
          <li>Planets</li>
          <li>Stars</li>
          <li>Moon</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
