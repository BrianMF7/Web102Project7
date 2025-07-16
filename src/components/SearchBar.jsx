import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search by title or description..."
        value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>);};

export default SearchBar; 