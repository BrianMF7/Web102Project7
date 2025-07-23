import React from 'react';
import Stats from './Stats';
import SearchBar from './SearchBar';
import Filters from './Filters';
import SpaceList from './SpaceList';
    import CategoryChart from './CategoryChart';
    import DateDistributionChart from './DateDistributionChart';

const Dashboard = ({
  spaceData,
  loading,
  error,
  searchTerm,
  setSearchTerm,
  dateFilter,
  setDateFilter,
  categoryFilter,
  setCategoryFilter,
  filteredData
}) => {
  return (
    <div className="dashboard">
      {loading ? (
        <div className="loading">Loading space data...</div>
      ) : error ? (
        <div className="error">Error: {error}</div>
      ) : (
        <>
          <Stats spaceData={spaceData} />
          
          <div className="visualizationSection">
            <h2>Data Visualizations</h2>
            <div className="chartsGrid">
              <CategoryChart spaceData={spaceData} />
              <DateDistributionChart spaceData={spaceData} />
            </div>
          </div>
          
          <div className="dashboardControls">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Filters 
              dateFilter={dateFilter} 
              setDateFilter={setDateFilter}
              categoryFilter={categoryFilter}
              setCategoryFilter={setCategoryFilter}
            />
          </div>
          
          <SpaceList filteredData={filteredData} />
              </>
                  )}
              </div>
         );
        };

export default Dashboard;
