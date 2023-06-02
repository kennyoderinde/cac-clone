import React from 'react';

const SearchInput = ({ items, onSearch }) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(searchTerm)
    );
    onSearch(filteredItems);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchInput;
