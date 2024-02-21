import React, { useState } from 'react';
import './SearchBar.css'; // Import CSS file for styling

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const flowers = [
    // Sample flower data
    { id: 1, name: 'Rose' },
    { id: 2, name: 'Lily' },
    { id: 3, name: 'Tulip' },
    // Add more flowers or details as needed
  ];

  const handleSearch = () => {
    // Perform search functionality here
    console.log('Searching for:', searchTerm);
    // Simulate search logic - filtering the flowers based on the search term
    const results = flowers.filter((flower) =>
      flower.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log('Search Results:', results);
    // You can further process the results here, such as displaying them in the UI
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search flowers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
